import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";

class Navbar extends Component {
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
            src="https://www.pinclipart.com/picdir/big/75-757125_white-dog-silhouette-white-dog-silhouette-transparent-clipart.png"
          />
        </div>
        <div className="menu_container">
          <img
            className="hamburger_menu"
            onClick={() => this.clickHandler()}
            alt="menu"
            src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/menu-icon-white-png-27.png"
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
              <li onClick={() => this.clickLinkHandler()} className="menu_link">
                Home
              </li>
            </Link>
            <Link className="link" to="/services">
              <li onClick={() => this.clickLinkHandler()} className="menu_link">
                Services
              </li>
            </Link>
            <Link className="link" to="/contact">
              <li onClick={() => this.clickLinkHandler()} className="menu_link">
                Contact Us
              </li>
            </Link>
            <Link className="link" to="/portal">
              <li onClick={() => this.clickLinkHandler()} className="menu_link">
                Client Portal
              </li>
            </Link>
            {this.props.client.username ? (
              <Link className="link" to="/">
                <li
                  className="menu_link"
                  onClick={() => {
                    this.clickLinkHandler();
                    this.props.logout();
                  }}
                >
                  Logout
                </li>
              </Link>
            ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
