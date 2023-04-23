import React from 'react';
import './QRCodeDisplay.css';

const QRCodeDisplay = ({ qrCodeDataURL }) => {
  return (
    <div className="qr-code-display">
      {qrCodeDataURL ? (
        <img src={qrCodeDataURL} alt="Generated QR Code" />
      ) : (
        <p>No QR code generated</p>
      )}
    </div>
  );
};

export default QRCodeDisplay;
