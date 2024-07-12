// Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container" style={{padding:'50px'}}>
      <h1 className="contact-title">Get in Touch 📬</h1>
      
      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Type your message here"></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: info@artwaves.in</p>
        <p>Phone: +91 123 456 7890</p>
      </div>
    </div>
  );
}

export default Contact;
