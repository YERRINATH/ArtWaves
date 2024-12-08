import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  applySketchEffect,
  applySepiaEffect,
  applyGrayscaleEffect,
  applyHighContrastEffect,
  applyInvertColorsEffect,
  applySaturationAdjustment,
  applyHueRotation,
  applyColorBalanceAdjustment,
  applyOilPaintingEffect,
  applyVignetteEffect,
  applyComicEffect, 
} from './imageEffects';

const ImageEditor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      applyFilter(applySketchEffect);
    }
  }, [selectedImage]);
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
      setFilteredImage(null);
    };

    reader.onerror = (error) => {
      console.error('Error occurred while reading the file:', error);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const applyFilter = (filterFunction, ...args) => {
    if (selectedImage) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0, img.width, img.height);
        try {
          filterFunction(context, img.width, img.height, ...args);
          setFilteredImage(canvas.toDataURL('image/png'));
        } catch (error) {
          console.error('Error occurred while applying filter:', error);
          // Provide feedback to the user about the error
        }
      };

      img.onerror = (error) => {
        console.error('Error occurred while loading the image:', error);
      };

      img.src = selectedImage;
    }
  };

  const resetFilter = () => {
    setFilteredImage(null);
  };

  const downloadFiltered = () => {
    if (filteredImage) {
      const downloadLink = document.createElement('a');
      downloadLink.href = filteredImage;
      downloadLink.download = 'filtered_image.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const effectButtons = [
    { label: 'Sketch', onClick: () => applyFilter(applySketchEffect) },
    { label: 'Sepia', onClick: () => applyFilter(applySepiaEffect) },
    { label: 'Grayscale', onClick: () => applyFilter(applyGrayscaleEffect) },
    { label: 'High Contrast', onClick: () => applyFilter(applyHighContrastEffect) },
    { label: 'Invert Colors', onClick: () => applyFilter(applyInvertColorsEffect) },
    { label: 'Adjust Saturation', onClick: () => applyFilter(applySaturationAdjustment, 1.5) },
    { label: 'Rotate Hue', onClick: () => applyFilter(applyHueRotation, 45) },
    { label: 'Balance Colors', onClick: () => applyFilter(applyColorBalanceAdjustment, 1.2, 0.8, 0.5) },
    { label: 'Oil Paint', onClick: () => applyFilter(applyOilPaintingEffect, 5) },
    { label: 'Vignette', onClick: () => applyFilter(applyVignetteEffect) },
    { label: 'applyComicEffect', onClick: () => applyFilter(applyComicEffect) }, 
  ];

  const downloadButtonText = filteredImage ? 'Download Filtered Image' : 'No Filtered Image';

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h2>Image Editor</h2>
          </div> 
          <div className="mb-3 text-center">
            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="row">
            <div className="btn-group mt-1">
              {effectButtons.map(({ label, onClick }, index) => (
                <button key={index} className="btn btn-primary btn-sm m-1" onClick={onClick}>
                  {label}
                </button>
              ))}
              <button className="btn btn-danger btn-sm m-1" onClick={resetFilter}>
                Reset
              </button>
            </div>
            <div className="col">
              {selectedImage && (
                <div className="text-center mb-4">
                  <h4>Original Image</h4>
                  <img src={selectedImage} alt="Original" className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                
                </div>
              )}
            </div>
            <div className="col">
              <div className="text-center mb-4">
                <h4>Filtered Image</h4>
                {filteredImage ? (
                  <>
                    <img src={filteredImage} alt="Filtered" className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                    <button className="btn btn-primary btn-sm mt-3" onClick={downloadFiltered}>
                      {downloadButtonText}
                    </button>
                  </>
                ) : (
                  <p>No Filtered Image</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
