import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import portalRoutes from "../../protalRoutes";
import { getUser, getPets } from "../../ducks/authReducer";
import { getConfirmed, getPending, getHistory } from "../../ducks/resReducer";
import axios from "axios";

class Portal extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getPets();
    this.props.getConfirmed();
    this.props.getPending();
    this.props.getHistory();
  }
  handleClick() {
    axios.get("/api/logout").catch(error => console.log(error));
  }
  render() {
    if (!this.props.client.username) {
      return <Redirect to="/login" />;
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
              <button onClick={() => this.handleClick()}>Logout</button>
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
  { getUser, getPets, getConfirmed, getPending, getHistory }
)(Portal);
