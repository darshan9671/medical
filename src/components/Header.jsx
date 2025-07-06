import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // closes after clicking a link

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-section">
          <img src={logo} alt="Medical Logo" className="logo-image" />
        </div>

        {/* ✅ Hamburger Menu */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>

        {/* ✅ Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}><h1>Home</h1></Link>
          <Link to="/about" onClick={closeMenu}><h1>About Us</h1></Link>
          <Link to="/photos" onClick={closeMenu}><h1>Photos</h1></Link>
          <Link to="/contact" onClick={closeMenu}><h1>Contact Us</h1></Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
