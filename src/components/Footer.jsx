import placeholderLogo from '../assets/placeholder-logo.png';
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={placeholderLogo} alt="ISTE NITK Logo" />
              <div className="logo-text">ISTE NITK</div>
            </div>
            <p>
              Empowering students with technical knowledge and fostering innovation at NITK Surathkal.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>NITK Surathkal, Mangalore, Karnataka - 575025</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>iste@nitk.edu.in</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#">Home</a></li>
              <li className="footer-link"><a href="#about">About Us</a></li>
              <li className="footer-link"><a href="#events">Events</a></li>
              <li className="footer-link"><a href="#team">Our Team</a></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#">Projects</a></li>
              <li className="footer-link"><a href="#">Gallery</a></li>
              <li className="footer-link"><a href="#">Blog</a></li>
              <li className="footer-link"><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#">Facebook</a></li>
              <li className="footer-link"><a href="#">Instagram</a></li>
              <li className="footer-link"><a href="#">LinkedIn</a></li>
              <li className="footer-link"><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ISTE NITK Chapter. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
