import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import portalRoutes from "../../protalRoutes";
class Portal extends Component {
  render() {
    if (!this.props.client.username) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <h2>Portal</h2>
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

export default connect(mapStateToProps)(Portal);
