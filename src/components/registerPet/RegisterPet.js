import React, { Component } from "react";
import { connect } from "react-redux";
import { registerPet } from "../../ducks/authReducer";

class RegisterPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: "",
      breed: "",
      birthday: "",
      weight: 0,
      color: "",
      feeding: ""
    };
  }
  render() {
    return (
      <div>
        <form>
          <label>Pet Name</label>
          <input
            required
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          <label>Upload Picture</label>
          <input
            onChange={e => {
              this.setState({ picture: e.target.value });
            }}
          />
          <label>Breed</label>
          <input
            required
            onChange={e => {
              this.setState({ breed: e.target.value });
            }}
          />
          <label>Birthday</label>
          <input
            onChange={e => {
              this.setState({ last_name: e.target.value });
            }}
          />
          <label>Weight</label>
          <input
            required
            type="tel"
            onChange={e => {
              this.setState({ weight: e.target.value });
            }}
          />
          <label>Fur Color</label>
          <input
            required
            type="tel"
            onChange={e => {
              this.setState({ color: e.target.value });
            }}
          />
          <label>Feeding Instructions</label>
          <input
            required
            onChange={e => {
              this.setState({ feeding: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.props.registerPet(
                this.state.name,
                this.state.picture,
                this.state.breed,
                this.state.birthday,
                this.state.weight,
                this.state.color,
                this.state.feeding
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
    pets: state.authReducer.pets
  };
}
export default connect(
  mapStateToProps,
  {
    registerPet
  }
)(RegisterPet);
