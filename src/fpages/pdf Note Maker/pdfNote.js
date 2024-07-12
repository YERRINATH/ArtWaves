import React from 'react';
import { Link } from 'react-router-dom';

function PdfNList() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/PdfNList/PdfN" className="category-link">
      Pdf Note Book
      </Link>
    </li>
  );
}

export default PdfNList;
