import React from "react";
import { Link } from "react-router-dom";
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
        {props.pets.map((pet, index) => {
          return (
            <div key={index}>
              <h5>{pet.name}</h5>
            </div>
          );
        })}
        {/* map function over array of pets */}
        <Link to="/portal/add_dog">
          <button>Add Pet</button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client,
    pets: state.authReducer.pets
  };
}

export default connect(mapStateToProps)(ClientProfile);
