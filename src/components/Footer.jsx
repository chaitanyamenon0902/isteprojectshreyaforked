import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import placeholderLogo from '../assets/placeholder-logo.png';

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#eee',
    padding: '3rem 1rem',
    textAlign: 'center',
  },
  footerContentCentered: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  footerBlock: {
    marginBottom: '2rem',
  },
  footerTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '1.5rem',
  },
  socialLink: {
    color: '#eee',
    transition: 'color 0.3s ease',
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
  },
  footerLink: {
    marginBottom: '0.5rem',
  },
  linkStyle: {
    color: '#eee',
    textDecoration: 'none',
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContentCentered}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '3rem' }}>
          <div style={{ flex: '1 1 250px', marginBottom: '2rem' }}>
            <div className="footer-logo" style={{ marginBottom: '1rem' }}>
              <img src={placeholderLogo} alt="ISTE NITK Logo" style={{ maxWidth: '120px' }} />
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>ISTE NITK</div>
            </div>
            <p>
              Empowering students with technical knowledge and fostering innovation at NITK Surathkal.
            </p>
            <div>
              <p><strong>Address:</strong> NITK Surathkal, Mangalore, Karnataka - 575025</p>
              <p><strong>Email:</strong> iste@nitk.edu.in</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
            </div>
          </div>

          <div style={{ flex: '1 1 150px', marginBottom: '2rem' }}>
            <h3 style={styles.footerTitle}>Quick Links</h3>
            <ul style={styles.footerLinks}>
              <li style={styles.footerLink}><Link to="/" style={styles.linkStyle}>Home</Link></li>
              <li style={styles.footerLink}><Link to="/about" style={styles.linkStyle}>About Us</Link></li>
              <li style={styles.footerLink}><Link to="/#events" style={styles.linkStyle}>Events</Link></li>
              <li style={styles.footerLink}><Link to="/meettheteam" style={styles.linkStyle}>Our Team</Link></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 150px', marginBottom: '2rem' }}>
            <h3 style={styles.footerTitle}>Resources</h3>
            <ul style={styles.footerLinks}>
              <li style={styles.footerLink}><Link to="/projects" style={styles.linkStyle}>Projects</Link></li>
              <li style={styles.footerLink}><Link to="/gallery" style={styles.linkStyle}>Gallery</Link></li>
              <li style={styles.footerLink}><Link to="/blog" style={styles.linkStyle}>Blog</Link></li>
              <li style={styles.footerLink}><a href="#" style={styles.linkStyle}>FAQ</a></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 150px', marginBottom: '2rem' }}>
            <h3 style={styles.footerTitle}>Follow Us</h3>
            <div style={styles.socialLinks}>
              <a href="https://www.facebook.com/istenitk/" style={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/istenitk/" style={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/c/istenitk" style={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/istenitk/?originalSubdomain=in" style={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #444', paddingTop: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} ISTE NITK Chapter. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
