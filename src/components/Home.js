import React from 'react';
import './Home.css';

const Home = ({ className }) => {
  return (
    <div className={`home ${className}`}>
      <div className="home-header">
        <h1>QR Code Generator</h1>
        <p>Generate custom QR codes easily and efficiently</p>
      </div>
      <div className="api-websocket-section">
        <h2>API & WebSocket Usage</h2>
        <p>
          Our website provides a fast and efficient QR code generation service, guaranteeing a 40ms response time. You can
          access our service through both an API and WebSocket connection.
        </p>

        <h3>API</h3>
        <p>
          To generate a QR code using our API, send a POST request to the following endpoint:
          <code>/api/generate-qr-code</code>
        </p>
        <p>
          Include a JSON payload with the following properties:
          <code>input</code> (the data to be encoded in the QR code) and <code>scale</code> (optional, the scale factor
          for the QR code).
        </p>

        <h3>WebSocket</h3>
        <p>
          To generate a QR code using our WebSocket service, connect to the WebSocket server at
          <code>ws://qr.hect.dev/ws</code> (replace "localhost" and "9000" with the appropriate values for your
          deployment).
        </p>
        <p>
          Send a JSON message with the following properties: <code>input</code> (the data to be encoded in the QR code)
          and <code>scale</code> (optional, the scale factor for the QR code). The server will respond with the QR code
          image data URL.
        </p>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Simple User Interface</h2>
          <p>Our easy-to-use interface makes generating QR codes a breeze.</p>
        </div>
        <div className="feature">
          <h2>Quick QR Code Generation</h2>
          <p>Generate QR codes in seconds, saving you time and effort.</p>
        </div>
        <div className="feature">
          <h2>WebSocket Support</h2>
          <p>Generate QR codes dynamically using WebSockets for real-time communication.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
