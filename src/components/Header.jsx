// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import placeholderLogo from '../assets/placeholder-logo.png'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={placeholderLogo} alt="ISTE NITK Logo" />
            <div className="logo-text">
              ISTE NITK
              <span>Indian Society for Technical Education</span>
            </div>
          </Link>

          <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/#about">About</Link></li>

            <li className="menu-item dropdown">
              <Link to="/#sigs">SIGs</Link>
              <ul className="dropdown-menu">
                <li><Link to="/sigs/charge">Charge</Link></li>
                <li><Link to="/sigs/crypt">Crypt</Link></li>
                <li><Link to="/sigs/create">Create</Link></li>
                <li><Link to="/sigs/chronicle">Chronicle</Link></li>
                <li><Link to="/sigs/catalyst">Catalyst</Link></li>
                <li><Link to="/sigs/credit">Credit</Link></li>
                <li><Link to="/sigs/clutch">Clutch</Link></li>
                <li><Link to="/sigs/concrete">Concrete</Link></li>
              </ul>
            </li>

            <li className="menu-item"><Link to="/meettheteam">Our Team</Link></li>
            <li className="menu-item"><Link to="/#events">Events</Link></li>
            <li className="menu-item"><Link to="/projects">Projects</Link></li>
            <li className="menu-item"><Link to="/she">SHE</Link></li>
            <li className="menu-item">
  <a href="https://istenitk.wordpress.com/" target="_blank" rel="noopener noreferrer">Blogs</a>
</li>
            <li className="menu-item"><Link to="/socialinitiatives">Social Initiatives</Link></li>
            <li className="menu-item"><Link to="/gallery">Gallery</Link></li>
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
