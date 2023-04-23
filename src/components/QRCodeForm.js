import React, { useState } from 'react';
import axios from 'axios';
import Loading from 'react-loading';
import './QRCodeForm.css';

const QRCodeForm = ({ setGeneratedQRCode }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/generate-qr-code', { input });
      setGeneratedQRCode(response.data.qrCodeDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">Enter text or URL:</label>
      <input
        type="text"
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit" className="generate-button" disabled={loading}>
        {loading ? (
          <Loading
            className="loading-spinner"
            type="bubbles"
            color="#ffffff"
            height={40}
            width={40}
          />
        ) : (
          'Generate QR Code'
        )}
      </button>
    </form>
  );
};

export default QRCodeForm;
