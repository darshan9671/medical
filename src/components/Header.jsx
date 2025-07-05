import React from "react";
import "./Header.css";
import logo from "../assets/logo2.png"; // Make sure this image exists

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-section">
          {/* ✅ Use logo image instead of text */}
          <img src={logo} alt="BigByte Logo" className="logo-image" />
        </div>

        <nav className="nav-links">
          <a href="#"><h1>Home</h1></a>
          <a href="#"><h1>About us</h1></a>
          <a href="#"><h1>Photos</h1></a>
          <a href="#"><h1>Contact Us</h1></a>
        </nav>

        
      </div>
    </div>
  );
};

export default Header;

