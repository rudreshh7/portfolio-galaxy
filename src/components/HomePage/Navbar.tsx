"use client";
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   Function to toggle the mobile now
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <ul className={`menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>PROJECTS</li>
        <li>
          <a href="https://bento.me/rudreshjha">SOCIALS</a>
        </li>
        <li>CONTACT</li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <img src="/images/Hamburger_MD.svg" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
