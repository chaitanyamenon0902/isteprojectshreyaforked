// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholderLogo from '../assets/placeholder-logo.png'; // Make sure you have a logo in assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <img src={placeholderLogo} alt="ISTE NITK Logo" />
            <div className="logo-text">
              ISTE NITK
              <span>Indian Society for Technical Education</span>
            </div>
          </a>

          <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item"><a href="#about">About</a></li>
            <li className="menu-item dropdown">
              <a href="#sigs">SIGs</a>
              <ul className="dropdown-menu">
                <li><a href="#charge">Charge</a></li>
                <li><a href="#crypt">Crypt</a></li>
                <li><a href="#create">Create</a></li>
                <li><a href="#chronicle">Chronicle</a></li>
                <li><a href="#catalyst">Catalyst</a></li>
                <li><a href="#credit">Credit</a></li>
                <li><a href="#clutch">Clutch</a></li>
                <li><a href="#concrete">Concrete</a></li>
              </ul>
            </li>
            <li className="menu-item"><a href="#team">Our Team</a></li>
            <li className="menu-item"><a href="#events">Events</a></li>
            <li className="menu-item"><Link to="/projects">Projects</Link></li>
            <li className="menu-item"><a href="#blogs">Blogs</a></li>
            <li className="menu-item"><a href="#she">SHE</a></li>
            <li className="menu-item"><a href="#socialinitiatives">Social Initiatives</a></li>
            <li className="menu-item"><a href="#gallery">Gallery</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;