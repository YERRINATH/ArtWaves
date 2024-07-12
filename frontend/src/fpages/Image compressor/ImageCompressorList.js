import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalSize, setOriginalSize] = useState(null);
  const [compressedSize, setCompressedSize] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }

    // Set the original image for display
    setOriginalImage(URL.createObjectURL(file));

    // Display original file size
    setOriginalSize(formatBytes(file.size));

    // Compress the image
    try {
      setLoading(true);
      const options = {
        maxSizeMB: 1, // You can set the maximum size in MB
        maxWidthOrHeight: 400, // Set a smaller maximum width or height
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);
      setCompressedImage(URL.createObjectURL(compressedFile));

      // Display compressed file size
      setCompressedSize(formatBytes(compressedFile.size));

      setError(null);
    } catch (error) {
      console.error('Image compression error:', error);
      setError(`Error compressing image: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    // Create a link and trigger a download
    const link = document.createElement('a');
    link.href = compressedImage;
    link.download = 'compressed_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)));
    return Math.round(bytes / Math.pow(k, i), 2) + ' ' + sizes[i];
  };

  return (
    <div className="container mt-5" style={{ padding: '70px' }}>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-3">Please select an image to compress:</p>
          <input type="file" onChange={handleImageChange} className="form-control mb-3" accept="image/*" />
          {originalImage && (
            <div>
              <h2 className="mt-3">Original Image</h2>
              <p>Size: {originalSize}</p>
              <img src={originalImage} alt="Original" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          {compressedImage && (
            <div>
              <h2 className="mt-3">Compressed Image</h2>
              <p>Size: {compressedSize}</p>
              <img src={compressedImage} alt="Compressed" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              <button onClick={handleDownload} className="btn btn-primary mt-3">
                Download Compressed Image
              </button>
            </div>
          )}
        </div>
      </div>

      {loading && <p className="mt-3">Compressing... Please wait.</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default ImageCompressor;
