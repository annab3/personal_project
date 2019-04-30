import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, updatePassword, updateUsername } from "../../ducks/authReducer";

class Login extends Component {
  render() {
    if (this.props.client.username) {
      return <Redirect to="/portal/reservations" />;
    } else {
      console.log(this.props);
      return (
        <div>
          <input
            placeholder="username"
            onChange={e => {
              this.props.updateUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={e => this.props.updatePassword(e.target.value)}
          />
          <button
            value="login"
            onClick={() =>
              this.props.login(this.props.username, this.props.password)
            }
          >
            Login
          </button>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client,
    username: state.authReducer.username,
    password: state.authReducer.password
  };
}

export default connect(
  mapStateToProps,
  { login, updatePassword, updateUsername }
)(Login);
