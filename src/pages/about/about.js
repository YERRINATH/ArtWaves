import React from 'react';
import './About.css'; // Import a CSS file for additional styling

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About ArtWaves 🚀</h1>
      <p className="about-description">
        Welcome to ArtWaves, a revolutionary digital canvas designed to ignite your creativity and redefine your artistic journey. At ArtWaves, we believe in the power of boundless imagination, and our platform is crafted to inspire and empower artists, document enthusiasts, and image processing enthusiasts alike.
      </p>
      <div className="feature-list">
        <div className="feature-item">
          <h2>🎨 Art & Drawing</h2>
          <p>From sketching your dreams to experimenting with unique image filters, ArtWaves is your virtual sketchpad for unlimited artistic expression.</p>
        </div>
        <div className="feature-item">
          <h2>📄 Document Handling</h2>
          <p>Effortlessly convert images to PDFs and explore a PDF viewer integrated with a notebook for seamless document management.</p>
        </div>
        <div className="feature-item">
          <h2>🌈 Image Processing</h2>
          <p>Transform your images with an advanced image compressor, extract text with precision, and craft visually stunning collages effortlessly.</p>
        </div>
      </div>
      <p className="about-community">
        ArtWaves isn't just a platform; it's a vibrant community where creativity knows no bounds. Join us in fostering artistic exploration, sharing ideas, and collaborating with like-minded individuals.
      </p>
      <p className="about-invitation">
        Embark on a journey where every click is an opportunity to unleash your imagination. ArtWaves is here to fuel your creative spark and elevate your artistic experience. Start creating, start exploring - your canvas awaits!
      </p>
    </div>
  );
}

export default About;
