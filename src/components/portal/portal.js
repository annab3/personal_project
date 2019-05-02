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
        <div>
          <h2>Portal</h2>
          <ul>
            <Link to="/portal/profile">
              <li>Profile</li>
            </Link>
            <Link to="/portal/reservations">
              <li>Reservations</li>
            </Link>
            <Link to="/portal/history">
              <li>History</li>
            </Link>
            <Link to="/home">
              <button onClick={() => this.props.logout()}>Logout</button>
            </Link>
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
