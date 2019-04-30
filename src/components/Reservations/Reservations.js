import React, { Component } from "react";
import { connect } from "react-redux";

class Reservations extends Component {
  render() {
    return <div>Reservations</div>;
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(mapStateToProps)(Reservations);
