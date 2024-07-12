import React from 'react';
import { Link } from 'react-router-dom';

function Imagelist() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/ImageList/Image" className="category-link">
        Image Filters
      </Link>
    </li>
  );
}

export default Imagelist;
