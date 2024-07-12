import axios from 'axios';
import { useState, useEffect } from 'react';

const saveDrawing = async (title, data) => {
  try {
    const uniqueCode = generateUniqueCode(); 
    const response = await axios.post('/save-drawing', { title, drawingData: data, uniqueCode } );
    return uniqueCode; // Return the unique code
  } catch (error) {
    console.error('Error saving drawing:', error);
  }
};



const downloadSketchImage = async (data, format) => {
  try {
    const downloadLink = document.createElement('a');
    downloadLink.href = data;
    downloadLink.download = `sketch.${format}`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    console.log(`Image Exported Successfully as ${format}:`, data);
  } catch (error) {
    console.error('Error exporting image:', error);
  }
};



const generateUniqueCode = () => {
  const timestamp = new Date().getTime(); // Get current timestamp
  const uniqueCode = `drawing_${timestamp}`; // Combine with a prefix to ensure uniqueness
  return uniqueCode;
};

export { generateUniqueCode, downloadSketchImage, saveDrawing };

export const getDrawing = async (drawingId) => {
  try {
    const response = await fetch(`/api/drawings/${drawingId}`); // Assuming your backend server exposes this endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch drawing');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching drawing: ${error.message}`);
  }
};
