import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-gray-800'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sanjay Agro</h3>
          <p>Your trusted partner in agricultural excellence.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#offer" onClick={(e) => { e.preventDefault(); scrollToSection('offer'); }}>Special Offer</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@sanjayagro.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
          <p>Address: Bhilai, Durg, India</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Sanjay Agro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 