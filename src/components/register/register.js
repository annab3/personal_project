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
      primary_phone: 0,
      secondary_phone: 0,
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }
  render() {
    return (
      <div>
        Register
        <form>
          <label>username</label>
          <input
            required
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <label>password</label>
          <input
            required
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <label>first name</label>
          <input
            required
            onChange={e => {
              this.setState({ first_name: e.target.value });
            }}
          />
          <label>last name</label>
          <input
            required
            onChange={e => {
              this.setState({ last_name: e.target.value });
            }}
          />
          <label>pimary phone number</label>
          <input
            required
            type="tel"
            onChange={e => {
              this.setState({ primary_phone: e.target.value });
            }}
          />
          <label>secondary phone number</label>
          <input
            required
            type="tel"
            onChange={e => {
              this.setState({ secondary_phone: e.target.value });
            }}
          />
          <label>street address</label>
          <input
            required
            onChange={e => {
              this.setState({ address: e.target.value });
            }}
          />
          <label>city</label>
          <input
            required
            onChange={e => {
              this.setState({ city: e.target.value });
            }}
          />
          <label>state</label>
          <input
            required
            onChange={e => {
              this.setState({ state: e.target.value });
            }}
          />
          <label>zipcode</label>
          <input
            required
            onChange={e => {
              this.setState({ zip: e.target.value });
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
                this.state.zip
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
