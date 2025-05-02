import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/Viralnest-removebg-preview.png"; // adjust path if needed
import ConnectForm from "./ConnectForm"; // Import the new ConnectForm

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectPopupOpen, setConnectPopupOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when any link is clicked
  };

  const openConnectPopup = () => {
    setConnectPopupOpen(true);
  };

  const closeConnectPopup = () => {
    setConnectPopupOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="#top">
            <img src={logo} alt="Viralnest Studio Logo" className="logo-img" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#services" onClick={handleLinkClick}>
            Services
          </a>
          <a href="#portfolio" onClick={handleLinkClick}>
            Portfolio
          </a>
          <a href="#faq" onClick={handleLinkClick}>
            FAQ
          </a>
          <a href="#about" onClick={handleLinkClick}>
            About Us
          </a>
        </nav>

        {/* Get Connect Button */}
        <button onClick={openConnectPopup} className="connect-button">
          Get Connect
        </button>
      </header>

      {/* Connect Popup */}
      {connectPopupOpen && (
        <div className="popup-overlay">
          <ConnectForm closePopup={closeConnectPopup} />
        </div>
      )}
    </>
  );
};

export default Header;
