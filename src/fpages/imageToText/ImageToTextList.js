import React from 'react';
import { Link } from 'react-router-dom';

function ImageTotextList() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/TextToImageList/ImageToText" className="category-link">
      Image To text List
      </Link>
    </li>
  );
}

export default ImageTotextList;

