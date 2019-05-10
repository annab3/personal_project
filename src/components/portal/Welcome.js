import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome_message">
        <h1>Welcome back, {this.props.client.first_name}!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(mapStateToProps)(Welcome);
