import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, updatePassword, updateUsername } from "../../ducks/authReducer";

class Login extends Component {
  render() {
    if (this.props.client.username && this.props.client.is_admin === false) {
      return <Redirect to="/portal" />;
    } else if (
      this.props.client.username &&
      this.props.client.is_admin === true
    ) {
      return <Redirect to="/admin" />;
    } else {
      return (
        <div className="login_page">
          <div className="login_register_contianer">
            <div className="login_container">
              <input
                className="login_input"
                required
                placeholder="username"
                onChange={e => {
                  this.props.updateUsername(e.target.value);
                }}
              />
              <input
                className="login_input"
                required
                type="password"
                placeholder="password"
                onChange={e => this.props.updatePassword(e.target.value)}
              />
              <button
                value="login"
                className="login_page-button"
                onClick={() =>
                  this.props.login(this.props.username, this.props.password)
                }
              >
                Login
              </button>
            </div>
            <div className="login_container">
              <Link to="/register">
                <button className="login_page-button">Register</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    username: state.authReducer.username,
    password: state.authReducer.password,
    client: state.authReducer.client
  };
}

export default connect(
  mapStateToProps,
  { login, updatePassword, updateUsername }
)(Login);
