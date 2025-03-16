// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // or use a global CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="My Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Get in Touch</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
