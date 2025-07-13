import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 7984971610</p>
          </div>
          <div className="contact-item">
            <h3>Gmail</h3>
            <p>devdtailor@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
