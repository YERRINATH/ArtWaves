import React from 'react';
import { Link } from 'react-router-dom';

function ImageCompressorList() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/ImageCompressorList/ImageCompressor" className="category-link">
        Image Compressor
      </Link>
    </li>
  );
}

export default ImageCompressorList;
