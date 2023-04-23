import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import QRCodeForm from './components/QRCodeForm';

function App() {
  const [generatedQRCode, setGeneratedQRCode] = useState(null);
  const [showQRForm, setShowQRForm] = useState(false);

  const toggleQRForm = () => {
    setShowQRForm(!showQRForm);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Home className={showQRForm ? 'shrink' : ''} />
        {!showQRForm && (
          <button className="qr-toggle-button" onClick={toggleQRForm}>
            Show QR Code Generator
          </button>
        )}
        <div className={`qr-form-container ${showQRForm ? 'visible' : 'hidden'}`}>
          <QRCodeForm setGeneratedQRCode={setGeneratedQRCode} />
        </div>
        {generatedQRCode && (
          <div className="qr-result">
            <img src={generatedQRCode} alt="Generated QR Code" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
