import React from 'react';
import { Link } from 'react-router-dom';

function ImageToPdfList() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/ImageToPdfList/ImageToPdf" className="category-link">
      Image To Pdf List
      </Link>
    </li>
  );
}

export default ImageToPdfList;

