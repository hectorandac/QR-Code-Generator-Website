const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors');
const { Server } = require('ws');
const http = require('http');

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.post('/api/generate-qr-code', async (req, res) => {
  const { input, scale } = req.body;

  try {
    const qrCodeDataURL = await QRCode.toDataURL(input, {
      errorCorrectionLevel: 'H', // Set error correction level to High
      scale: scale || 4, // Use the scale value from the request or the default value (4)
      margin: 1, // Adjust the margin around the QR code (default is 4)
    });
    res.json({ qrCodeDataURL });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

const server = http.createServer(app);
const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', async (message) => {
    let input;
    let scale;
  
    try {
      const parsedMessage = JSON.parse(message);
      input = parsedMessage.input;
      scale = parsedMessage.scale;
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
      ws.send('Error: Failed to parse WebSocket message');
      return;
    }
  
    console.log(`Received message: ${input}`);
  
    try {
      const qrCodeDataURL = await QRCode.toDataURL(input, {
        errorCorrectionLevel: 'H', // Set error correction level to High
        scale: scale || 4, // Use the scale value from the message or the default value (4)
        margin: 1, // Adjust the margin around the QR code (default is 4)
      });
      ws.send(qrCodeDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
      ws.send('Error: Failed to generate QR code');
    }
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
