import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>logo</div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/services">
          <li>Services/Rates</li>
        </Link>
        <Link to="/portal">
          <li>Reservations</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
