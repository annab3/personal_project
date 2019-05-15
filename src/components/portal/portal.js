import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import portalRoutes from "../../protalRoutes";
import { getUser, getPets, logout } from "../../ducks/authReducer";

class Portal extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getPets();
  }
  render() {
    if (!this.props.client.username) {
      return <Redirect to="/login" />;
    } else if (this.props.client.is_admin) {
      return <Redirect to="/admin" />;
    } else {
      return (
        <div className="portal_container">
          <ul className="portal_nav">
            <Link className="link" to="/portal/profile">
              <li className="portal_navbar_link">Profile</li>
            </Link>
            <Link className="link" to="/portal/reservations">
              <li className="portal_navbar_link">Reservations</li>
            </Link>
            <Link className="link" to="/portal/history">
              <li className="portal_navbar_link">History</li>
            </Link>
            <li className="logout_button" onClick={() => this.props.logout()}>
              Logout
            </li>
          </ul>
          {portalRoutes}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(
  mapStateToProps,
  { getUser, getPets, logout }
)(Portal);
