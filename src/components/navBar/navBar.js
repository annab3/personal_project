import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img
          className="logo"
          alt="logo"
          src="https://cdn.pixabay.com/photo/2016/05/27/18/26/pointer-1420402_1280.png"
        />
      </div>
      <img src="https://cdn2.iconfinder.com/data/icons/music-player-icons-filled/41/Menu_Bar-512.png" />
      <ul className="navbar_links">
        <Link to="/">
          <li className="navbar_link">Home</li>
        </Link>
        <Link to="/services">
          <li className="navbar_link">Services</li>
        </Link>
        <Link to="/contact">
          <li className="navbar_link">Contact Us</li>
        </Link>
        <Link to="/portal">
          <li className="navbar_link">Client Portal</li>
        </Link>
      </ul>
    </nav>
  );
}
