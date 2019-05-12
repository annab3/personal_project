import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../ducks/authReducer";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      primary_phone: "",
      secondary_phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: ""
    };
  }
  render() {
    return (
      <div>
        Register
        <form>
          <label>Username</label>
          <input
            required
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <label>Password</label>
          <input
            required
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <label>First Name</label>
          <input
            required
            onChange={e => {
              this.setState({ first_name: e.target.value });
            }}
          />
          <label>Last Name</label>
          <input
            required
            onChange={e => {
              this.setState({ last_name: e.target.value });
            }}
          />
          <label>Pimary Phone Number</label>
          <input
            required
            type="tel"
            onChange={e => {
              this.setState({ primary_phone: e.target.value });
            }}
          />
          <label>Secondary Phone Number</label>
          <input
            required
            type="tel"
            onChange={e => {
              this.setState({ secondary_phone: e.target.value });
            }}
          />
          <label>Street Address</label>
          <input
            required
            onChange={e => {
              this.setState({ address: e.target.value });
            }}
          />
          <label>City</label>
          <input
            required
            onChange={e => {
              this.setState({ city: e.target.value });
            }}
          />
          <label>State</label>
          <input
            required
            onChange={e => {
              this.setState({ state: e.target.value });
            }}
          />
          <label>Zipcode</label>
          <input
            required
            onChange={e => {
              this.setState({ zip: e.target.value });
            }}
          />
          <label>Email</label>
          <input
            required
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.props.register(
                this.state.username,
                this.state.password,
                this.state.first_name,
                this.state.last_name,
                this.state.primary_phone,
                this.state.secondary_phone,
                this.state.address,
                this.state.city,
                this.state.state,
                this.state.zip,
                this.state.email
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}
export default connect(
  mapStateToProps,
  {
    register
  }
)(Register);
