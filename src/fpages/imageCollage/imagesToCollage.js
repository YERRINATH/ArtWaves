import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import html2canvas from "html2canvas";

const ImageCollage = () => {
  const [images, setImages] = useState([]);
  const collageRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      src: URL.createObjectURL(file),
      alt: file.name,
    }));

    setImages([...images, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const downloadCollage = () => {
    html2canvas(collageRef.current).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "collage.png";
      link.click();
    });
  };

  return (
    <div style={{padding:'100px'}}>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select files</p>
      </div>
      <div ref={collageRef} style={collageStyles}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={imageStyles}
          />
        ))}
      </div>
      <button onClick={downloadCollage}>Download Collage</button>
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #ccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const collageStyles = {
  display: "flex",
  flexWrap: "wrap",
  margin: "20px 0",
};

const imageStyles = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  margin: "5px",
};

export default ImageCollage;
