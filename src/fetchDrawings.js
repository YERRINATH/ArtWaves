import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const YourComponent = () => {
  const [drawingData, setDrawingData] = useState(null);
  const [backgroundImageData, setBackgroundImageData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDrawing = async () => {
      try {
        const response = await axios.get('/drawings');
        const path = window.location.pathname;
        const uniqueCode = path.substring(path.lastIndexOf('/') + 1);

        const fetchedDrawing = response.data.find(drawing => drawing.uniqueCode === uniqueCode);

        if (fetchedDrawing) {
          setDrawingData(fetchedDrawing);
          setBackgroundImageData(fetchedDrawing.drawingData);
        } else {
          setError('Drawing with unique code not found.');
        }
      } catch (error) {
        console.error('Error fetching drawing:', error);
        setError('Failed to fetch drawing. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrawing();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{padding:'100px'}}>
      {drawingData ? (
        <ReactSketchCanvas
          backgroundImage={backgroundImageData}
          width={drawingData.width*6}
          height={drawingData.height}
          // Other props...
        />
      ) : (
        <div>No drawing found.</div>
      )}
    </div>
  );
};

export default YourComponent;
