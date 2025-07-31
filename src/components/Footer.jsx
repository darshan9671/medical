import React from "react";
import "./Footer.css";
import logo from "../assets/logo2.png";

// Font Awesome Icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* ✅ Left: Logo inside its own div */}
        <div className="footer-logo-box">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-logo-text">Your Trusted Health Partner</p>
        </div>

        {/* ✅ Middle: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/photos">Photos</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* ✅ Right: Contact Info */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p><FaMapMarkerAlt className="footer-icon" /> 3X64+58J, Bhagwanpur, Haryana 136156</p>
          <p><FaEnvelope className="footer-icon" /> darshanlal9671@gmail.com</p>
          <p><FaPhoneAlt className="footer-icon" /> +91 9671915926</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Medical Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
