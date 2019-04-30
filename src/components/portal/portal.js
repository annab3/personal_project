import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import portalRoutes from "../../protalRoutes";
import { getUser } from "../../ducks/authReducer";
import axios from "axios";

class Portal extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  handleClick() {
    axios.get("/api/logout").catch(error => console.log(error));
  }
  render() {
    if (!this.props.client.username) {
      return <Redirect to="/login" />;
    } else {
      console.log(this.props);
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
  { getUser }
)(Portal);
