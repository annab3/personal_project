import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome_message">
        <h1>Welcome back, {this.props.client.first_name}!</h1>
        <img
          alt="alt logo"
          src="https://s3.us-east-2.amazonaws.com/dev-dogs/bucketFolder/dm_white_logo.png"
        />
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
