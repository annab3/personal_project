import React from "react";
import { connect } from "react-redux";

function ClientProfile(props) {
  return <div>Profile</div>;
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(mapStateToProps)(ClientProfile);
