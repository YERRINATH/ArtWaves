import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Signature = () => {
  const signatureRef = useRef();
  const [penColor, setPenColor] = useState("black"); // Initialize with black color
  
  const handleSaveSignature = () => {
    const signatureData = signatureRef.current.toDataURL();

    const downloadLink = document.createElement('a');
    downloadLink.href = signatureData;
    downloadLink.download = 'signature.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    console.log('Signature data:', signatureData);
  };

  const handleClearSignature = () => {
    signatureRef.current.clear();
  };

  const handleColorChange = (e) => {
    setPenColor(e.target.value);
  };

  return (
    <div className="container mt-5" style={{padding:'0px'}}>
    <h1 className="mb-4" style={{ color: 'black' }}>Digital Signature</h1>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <SignatureCanvas
                ref={signatureRef}
                canvasProps={{
                  width: 700,
                  height: 200,
                  className: 'signature-canvas border border-dark rounded',
                }}
                backgroundColor="white"
                penColor={penColor} // Use dynamic penColor
              />
              <h4>color of pen</h4>
              <input type="color" value={penColor} onChange={handleColorChange} /> {/* Input for color selection */}
            </div>
            <div className="col-md-7 d-flex align-items-center">
              <div className="d-flex flex-column">
                <button
                  className="btn btn-primary mb-2"
                  onClick={handleSaveSignature}
                >
                  Save Signature
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleClearSignature}
                >
                  Clear Signature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
