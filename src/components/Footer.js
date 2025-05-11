import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Viralnest <span>Studio</span>
          </h2>
          <p className="footer-description">
            Your go-to place for expert website care, design, and development to grow your business.
          </p>
        </div>

        {/* Packages */}
        <div className="footer-section">
          <h3 className="footer-title">Packages</h3>
          <div className="footer-links">
            <a href="#services">Social Media Management</a>
            <a href="#services">Website Design & Development</a>
            <a href="#services">Video Editing</a>
            <a href="#services">Voice Dubbing</a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="mailto:Viralnest1@gmail.com">viralneststudio1@gmail.com</a>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        © 2025 Viralnest Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
