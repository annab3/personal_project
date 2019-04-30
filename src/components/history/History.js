import React from "react";
import { connect } from "react-redux";

function History(props) {
  return <div>Past Reservations</div>;
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(mapStateToProps)(History);
