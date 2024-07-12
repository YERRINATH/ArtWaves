
import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const TextExtractor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#f8f9fa'; // Set a light background color
  }, []);

  const handleImageUpload = async (event) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));

    setLoading(true);
    try {
      const result = await Tesseract.recognize(image, 'eng');
      setRecognizedText(result.data.text);
    } catch (error) {
      console.error('Error recognizing text:', error);
      setRecognizedText('Error recognizing text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{padding:'70px'}}>
      <h1 className="text-center mb-4">Text Extractor from Image</h1>
      <div className="row">
        <div className="col-md-6">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="form-control mb-4" />

          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Loading...</p>
            </div>
          ) : (
            selectedImage && (
              <div>
                <h2 className="text-center mt-4">Selected Image:</h2>
                <img src={selectedImage} alt="Selected" className="img-fluid mx-auto d-block mb-4" />
              </div>
            )
          )}
        </div>

        <div className="col-md-6">
          <div>
            <h2 className="text-center mt-4">Recognized Text:</h2>
            <p className="text-center">{recognizedText || 'No text recognized.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextExtractor;
