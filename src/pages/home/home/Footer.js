import React from 'react';
import './Footer.css'; // assuming you've saved your CSS in a file named styles.css

const Footer = () => {
  return (
    <div className="footer-social-icons">
      <ul className="social-icons">
        <li><a href="https://www.facebook.com" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
        <li><a href="https://twitter.com" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
        <li><a href="https://www.youtube.com" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
        <li><a href="https://www.linkedin.com" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com" className="social-icon"> <i className="fa fa-github"></i></a></li>
        <li><a href="https://www.instagram.com" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  );
};

export default Footer;
