import React from 'react';
import { Link } from 'react-router-dom';

function SignatureList() {
  return (
    <li style={{padding:'100px'}}>
      <Link to="/SignatureList/Signature" className="category-link">
      Signature List
      </Link>
    </li>
  );
}

export default SignatureList;
