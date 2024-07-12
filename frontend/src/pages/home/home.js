import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <div className="home-container ">
      <h1 className="app-title">🚀 ArtWaves</h1>
      <p className="app-description">Dive into a world of vibrant creativity with ArtWaves - your digital canvas for boundless possibilities.</p>
      <div className="category-container">
        <div className="category art-drawing">
          <h2 className="category-title">🎨 Art & Drawing</h2>
          <ul className="category-list">
            <li>
              <Link to="/DrawingList" className="category-link">Drawing</Link>
            </li>
            <li>
              <Link to="/h1" className="category-link">home1</Link>
            </li>
            <li>
              <Link to="/fetch" className="category-link">draw canvas</Link>
            </li>
            <li>
              <Link to="/hslides" className="category-link">home slides</Link>
            </li>
            
            
            <li>
              <Link to="/ImageList" className="category-link">Image Filters</Link>
            </li>
            <li>
              <Link to="/SignatureList" className="category-link">Signature</Link>
            </li>
          </ul>
        </div>
        <div className="category document-handling">
          <h2 className="category-title">📄 Document Handling</h2>
          <ul className="category-list">
            <li>
              <Link to="/ImageToPdfList" className="category-link">Image to PDF</Link>
            </li>
            <li>
              <Link to="/PdfNList" className="category-link">PDF Viewer With Notebook</Link>
            </li>
          </ul>
        </div>
        <div className="category image-processing">
          <h2 className="category-title">🌈 Image Processing</h2>
          <ul className="category-list">
            <li>
              <Link to="/ImageCompressorList" className="category-link">Image Compressor</Link>
            </li>
            <li>
              <Link to="/ImageToTextList" className="category-link">Text Extractor From Image</Link>
            </li>
            <li>
              <Link to="/ImageCollageList" className="category-link">Image Collage</Link>
            </li>
            {/* <li>
              <Link to="/I3CollageList" className="category-link">3 Image Collage</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <h1 className="about-title">About ArtWaves 🚀</h1>
      <p className="about-description">
        Welcome to ArtWaves, a revolutionary digital canvas designed to ignite your creativity and redefine your artistic journey. At ArtWaves, we believe in the power of boundless imagination, and our platform is crafted to inspire and empower artists, document enthusiasts, and image processing enthusiasts alike.
      </p> <h1 className="about-title">About ArtWaves 🚀</h1>
      <p className="about-description">
        Welcome to ArtWaves, a revolutionary digital canvas designed to ignite your creativity and redefine your artistic journey. At ArtWaves, we believe in the power of boundless imagination, and our platform is crafted to inspire and empower artists, document enthusiasts, and image processing enthusiasts alike.
      </p> <h1 className="about-title">About ArtWaves 🚀</h1>
      <p className="about-description">
        Welcome to ArtWaves, a revolutionary digital canvas designed to ignite your creativity and redefine your artistic journey. At ArtWaves, we believe in the power of boundless imagination, and our platform is crafted to inspire and empower artists, document enthusiasts, and image processing enthusiasts alike.
      </p>
    </div>
  );
}

export default Home;
