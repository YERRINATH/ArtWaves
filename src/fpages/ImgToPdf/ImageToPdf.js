import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Button, Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageToPdfConverter = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const pdfRef = useRef(null);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (event) => {
        imageArray.push(event.target.result);
        if (imageArray.length === files.length) {
          setImages(imageArray);
        }
      };

      reader.readAsDataURL(files[i]);
    }
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <Col key={index} xs={6} md={4} lg={3} className="mb-3">
        <img
          src={image}
          alt={`Image ${index + 1}`}
          className="img-fluid"
          style={{ maxWidth: '100%', maxHeight: '150px', margin: '5px' }}
        />
      </Col>
    ));
  };

  const convertToPdf = async () => {
    if (images.length === 0) {
      alert('Please select at least one image.');
      return;
    }

    setLoading(true);

    const pdf = new jsPDF();

    const promises = images.map((image, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;

        img.onload = () => {
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();

          const imgWidth = img.width;
          const imgHeight = img.height;

          const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

          const scaledWidth = imgWidth * scaleFactor;
          const scaledHeight = imgHeight * scaleFactor;

          pdf.addImage(image, 'JPEG', (pdfWidth - scaledWidth) / 2, (pdfHeight - scaledHeight) / 2, scaledWidth, scaledHeight);

          // Add bookmark at the bottom
          const bookmarkText = `Watermark ${index + 1}`;
          const textWidth = pdf.getStringUnitWidth(bookmarkText) * 16 / pdf.internal.scaleFactor; // Adjust fontSize as needed
          const textX = (pdfWidth - textWidth) / 2;
          const textY = pdfHeight - 10; // Adjust distance from bottom as needed

          pdf.setTextColor(0, 0, 255); // Blue color for bookmarks
          pdf.setFontSize(16); // Adjust fontSize as needed
          pdf.text(bookmarkText, textX, textY);

          if (index === images.length - 1) {
            resolve();
          } else {
            pdf.addPage();
            resolve();
          }
        };
      });
    });

    await Promise.all(promises);

    setLoading(false);

    // Save PDF
    pdf.save('images.pdf');
  };

  return (
    <Container className="mt-5" style={{ padding: '100px' }}>
      <Row>
        <Col>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={loading}
            className="form-control mb-3"
          />
        </Col>
        <Col>
          <Button onClick={convertToPdf} disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Converting...
              </>
            ) : (
              'Convert to PDF'
            )}
          </Button>
        </Col>
      </Row>
      {loading && <Spinner animation="border" className="mt-3" />}
      <Row className="mt-3">{renderImages()}</Row>
      <Row className="mt-3">
        <Col ref={pdfRef}></Col>
      </Row>
    </Container>
  );
};

export default ImageToPdfConverter;
