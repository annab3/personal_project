import React from "react";
import { connect } from "react-redux";

function ClientProfile(props) {
  return (
    <div>
      <div>
        <h5>
          Name: {props.client.first_name} {props.client.last_name}
        </h5>
        <h5>Primary Phone#: {props.client.primary_phone}</h5>
        <h5>Secondary Phone#: {props.client.secondary_phone}</h5>
        <h5>Adress: {props.client.address}</h5>
        <h5>City: {props.client.city}</h5>
        <h5>State: {props.client.state}</h5>
        <h5>Zipcode: {props.client.zip}</h5>
      </div>
      <div>
        pets
        {/* map function over array of pets */}
        <button>Add Pet</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client
  };
}

export default connect(mapStateToProps)(ClientProfile);
