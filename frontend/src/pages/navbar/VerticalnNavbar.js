// RotatingLogos.js
import React, { useState } from 'react';
import './VerticalNavbar.css';

const logos = [
  { img: './images/drawing.svg', hoverImg: './images/draw.gif', hoverText: 'Doodle Dreamscape', link: '/DrawingList' },
  { img: './images/imagefilter.svg', hoverImg: './images/filters.gif', hoverText: 'Visual Dynamics', link: '/ImageList' },
  { img: './images/imgtopdf.jpg', hoverImg: './images/imgtopdf.gif', hoverText: 'Photo Port PDF', link: '/ImageToPdfList' },
  { img: './images/pdfnote.svg', hoverImg: './images/pdfview.gif', hoverText: 'PDF Scribbler', link: '/PdfNList' },
  { img: './images/digsign.jpg', hoverImg: './images/sign.gif', hoverText: 'Digital Signature', link: '/SignatureList' },
  { img: './images/imgcompressed.jpg', hoverImg: './images/imgcompress.gif', hoverText: 'Image Squeeze', link: '/ImageCompressorList' },
  { img: './images/image-text.svg', hoverImg: './images/extracttextimage.gif', hoverText: 'Text Snap Extractor', link: '/ImageToTextList' },
  { img: './images/image-collage.svg', hoverImg: './images/collage1.gif', hoverText: 'Collage Craft', link: '/ImageCollageList' }
];

const RotatingLogos = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="rotating-logos-container" style={{paddingTop:'100px'}}>
      {logos.map((logo, index) => (
        <a key={index} href={logo.link} className={`logo logo-${index}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <img src={logo.img} alt={`Logo ${index}`} />
        </a>
      ))}
      {hoveredIndex !== null && (
        <div className="hover-content">
          <img src={logos[hoveredIndex].hoverImg} alt="Hovered" className="hover-image" />
          <p className="hover-text">{logos[hoveredIndex].hoverText}</p>
        </div>
      )}
    </div>
  );
};

export default RotatingLogos;
