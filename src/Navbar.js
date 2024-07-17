import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#">New & Featured</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Sale</a>
          <a href="#">Customise</a>
          <a href="#">SNKRS</a>
          <a href="#" className="icon">
            <svg className="icon-search" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 10h13M8 14h13M8 18h13M4 6h.01M4 10h.01M4 14h.01M4 18h.01"></path>
            </svg>
          </a>
          <a href="#" className="icon">
            <svg className="icon-cart" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 14H5L3 3zm4 16a2 2 0 104 0H7z"></path>
            </svg>
          </a>
        </div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
