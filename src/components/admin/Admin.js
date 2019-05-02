import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";
import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div>
        Admin Page
        <Link to="/home">
          <button onClick={() => this.props.logout()}>Logout</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { logout }
)(Admin);
