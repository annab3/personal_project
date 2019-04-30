import React from "react";
import { connect } from "react-redux";
import {
  updateUsername,
  updatePassword,
  updateFirstName,
  updateLastName,
  updatePrimaryPhone,
  updateSecondaryPhone,
  updateAddress,
  updateCity,
  updateState,
  updateZip,
  register
} from "../../ducks/authReducer";

function Register(props) {
  return (
    <div>
      Register
      <form>
        <label>username</label>
        <input
          onChange={e => {
            props.updateUsername(e.target.value);
          }}
        />
        <label>password</label>
        <input
          onChange={e => {
            props.updatePassword(e.target.value);
          }}
        />
        <label>first name</label>
        <input
          onChange={e => {
            props.updateFirstName(e.target.value);
          }}
        />
        <label>last name</label>
        <input
          onChange={e => {
            props.updateLastName(e.target.value);
          }}
        />
        <label>pimary phone number</label>
        <input
          onChange={e => {
            props.updatePrimaryPhone(e.target.value);
          }}
        />
        <label>secondary phone number</label>
        <input
          onChange={e => {
            props.updateSecondaryPhone(e.target.value);
          }}
        />
        <label>street address</label>
        <input
          onChange={e => {
            props.updateAddress(e.target.value);
          }}
        />
        <label>city</label>
        <input
          onChange={e => {
            props.updateCity(e.target.value);
          }}
        />
        <label>state</label>
        <input
          onChange={e => {
            props.updateState(e.target.value);
          }}
        />
        <label>zip</label>
        <input
          onChange={e => {
            props.updateZip(e.target.value);
          }}
        />
        <button
          onClick={() =>
            props.register(
              props.username,
              props.password,
              props.first_name,
              props.last_name,
              props.primary_phone,
              props.secondary_phone,
              props.address,
              props.city,
              props.state,
              props.zip
            )
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client,
    username: state.authReducer.username,
    password: state.authReducer.password,
    first_name: state.authReducer.first_name,
    last_name: state.authReducer.last_name,
    primary_phone: state.authReducer.primary_phone,
    secondary_phone: state.authReducer.secondary_phone,
    address: state.authReducer.address,
    city: state.authReducer.city,
    state: state.authReducer.state,
    zip: state.authReducer.zip
  };
}
export default connect(
  mapStateToProps,
  {
    updateUsername,
    updatePassword,
    updateFirstName,
    updateLastName,
    updatePrimaryPhone,
    updateSecondaryPhone,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    register
  }
)(Register);
