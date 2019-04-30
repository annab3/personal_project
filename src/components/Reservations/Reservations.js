import React from "react";
import { connect } from "react-redux";

function Reservations(props) {
  return <div>Reservations</div>;
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(mapStateToProps)(Reservations);
