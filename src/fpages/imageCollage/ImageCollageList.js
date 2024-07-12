import React from 'react';
import { Link } from 'react-router-dom';

function ImageCollageList() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/ImageCollageList/ImageCollage" className="category-link">
        Image collage
      </Link>
    </li>
  );
}

export default ImageCollageList;


