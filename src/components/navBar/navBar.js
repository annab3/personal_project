import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }
  clickHandler() {
    let { status } = this.state;
    if (status !== "open") {
      this.setState({ status: "open" });
    } else if (status === "open") {
      this.setState({ status: "close" });
    }
  }
  clickLinkHandler() {
    this.setState({ status: "close" });
  }
  render() {
    return (
      <nav className="navbar">
        <div>
          <img
            className="logo"
            alt="logo"
            src="https://cdn.pixabay.com/photo/2016/05/27/18/26/pointer-1420402_1280.png"
          />
        </div>
        <div className="menu_container">
          <img
            className="hamburger_menu"
            onClick={() => this.clickHandler()}
            alt="menu"
            src="http://chittagongit.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
          />

          <ul className="navbar_links">
            <Link className="link" to="/">
              <li className="navbar_link">Home</li>
            </Link>
            <Link className="link" to="/services">
              <li className="navbar_link">Services</li>
            </Link>
            <Link className="link" to="/contact">
              <li className="navbar_link">Contact Us</li>
            </Link>
            <Link className="link" to="/portal">
              <li className="navbar_link">Client Portal</li>
            </Link>
          </ul>
        </div>

        <div className={`menu_${this.state.status}`}>
          <ul className="menu_links">
            <Link className="link" to="/">
              <li
                onClick={() => this.clickLinkHandler()}
                className="navbar_link"
              >
                Home
              </li>
            </Link>
            <Link className="link" to="/services">
              <li
                onClick={() => this.clickLinkHandler()}
                className="navbar_link"
              >
                Services
              </li>
            </Link>
            <Link className="link" to="/contact">
              <li
                onClick={() => this.clickLinkHandler()}
                className="navbar_link"
              >
                Contact Us
              </li>
            </Link>
            <Link className="link" to="/portal">
              <li
                onClick={() => this.clickLinkHandler()}
                className="navbar_link"
              >
                Client Portal
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
