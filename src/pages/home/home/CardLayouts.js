import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imagesWithLinks = [
  { image: './images/draw.gif', link: '/DrawingList', name: 'Doodle Dreamscape' },
  { image: './images/filters.gif', link: '/ImageList', name: 'Visual Dynamics' },
  { image: './images/sign.gif', link: '/SignatureList', name: 'Digital Signature' },
  { image: './images/imgtopdf.gif', link: '/ImageToPdfList', name: 'Photo Port PDF' },
  { image: './images/pdfview.gif', link: '/PdfNList', name: 'PDF Scribbler' },
  { image: './images/imgcompress.gif', link: '/ImageCompressorList', name: 'Image Squeeze' },
  { image: './images/extracttextimage.gif', link: '/ImageToTextList', name: 'Text Snap Extractor' },
  { image: './images/collage1.gif', link: '/ImageCollageList', name: 'Collage Craft' },
];

// Configuration settings for the Slider component
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1000,
  style: { padding: '10px 0', margin: '0 -50px' } // Adjusted style here
};

// Component for horizontal image slider
const HorizontalSwiper = () => {
  return (
    <Slider {...settings}>
      {imagesWithLinks.map((item, index) => (
        <div key={index} style={{ width: '260px', textAlign: 'center', margin: '0 10px' }}>
          <div style={{ width: '210px', height: '220px', margin: '0 auto' }}>
            {/* Wrap the image inside an anchor tag with the corresponding link */}
            <a href={item.link}>
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
              />
            </a>
          </div>
          <p style={{ textAlign: 'center', margin: '10px 0' }}>{item.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default HorizontalSwiper;
