import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../ducks/authReducer";
import FileUpload from "../fileUpload/FileUpload";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      primary_number: "",
      secondary_number: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: ""
    };
  }
  clickHandler() {
    let {
      username,
      password,
      first_name,
      primary_number,
      secondary_number,
      address,
      city,
      state,
      zip,
      email
    } = this.state;
    let client_picture = this.props.pet_picture;
    let newclient = {
      username,
      password,
      first_name,
      primary_number,
      secondary_number,
      address,
      city,
      state,
      zip,
      email,
      client_picture
    };
    this.props.register(newclient);
  }
  render() {
    return (
      <div className="register_page">
        <div className="register_container">
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
            <label>Picture</label>
            {this.props.client_picture != "" ? (
              <img src={this.props.client_picture} alt="client" />
            ) : null}
            <FileUpload />

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
                this.setState({ primary_number: e.target.value });
              }}
            />
            <label>Secondary Phone Number</label>
            <input
              required
              type="tel"
              onChange={e => {
                this.setState({ secondary_number: e.target.value });
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
            <button onClick={() => this.clickHandler()}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client,
    pet_picture: state.authReducer.pet_picture
  };
}
export default connect(
  mapStateToProps,
  {
    register
  }
)(Register);
