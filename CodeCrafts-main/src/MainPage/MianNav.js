import React, { useState } from 'react';
import codecrafts from '../codecrafts.png';

function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/">
            <img src={codecrafts} alt="CodeCrafts Logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <div className="nav-links">
            <a href="/templates" className="nav-link">Templates</a>
            <a href="/designs" className="nav-link">Designs</a>
          </div>

          <div className="nav-search">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="nav-auth">
            <a href="/login" className="nav-login">Login</a>
            <a href="/signup" className="nav-signup">Sign Up</a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-links">
            <a href="/templates" className="nav-link">Templates</a>
            <a href="/designs" className="nav-link">Designs</a>
          </div>

          <div className="mobile-search">
            <input type="text" placeholder="Search..." className="nav-search" />
          </div>

          <div className="mobile-auth">
            <a href="/login" className="nav-login">Login</a>
            <a href="/signup" className="nav-signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;