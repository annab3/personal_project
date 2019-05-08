import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerDog } from "../../ducks/authReducer";
import FileUpload from "../fileUpload/FileUpload";

class RegisterDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      breed: "",
      birthday: "",
      weight: 0,
      color: "",
      feeding: ""
    };
  }
  clickhandler() {
    this.props.registerDog(
      this.state.name,
      this.props.pet_picture,
      this.state.breed,
      this.state.birthday,
      this.state.weight,
      this.state.color,
      this.state.feeding,
      this.props.client.client_id
    );
    this.setState({
      name: "",
      breed: "",
      birthday: "",
      weight: 0,
      color: "",
      feeding: ""
    });
  }
  render() {
    return (
      <div>
        <div>
          <h4>Pet Name</h4>
          <input
            required
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          <h4>Upload Picture</h4>
          <FileUpload />

          <h4>Breed</h4>
          <input
            onChange={e => {
              this.setState({ breed: e.target.value });
            }}
          />
          <h4>Birthday</h4>
          <input
            onChange={e => {
              this.setState({ last_name: e.target.value });
            }}
          />
          <h4>Weight</h4>
          <input
            onChange={e => {
              this.setState({ weight: e.target.value });
            }}
          />
          <h4>Fur Color</h4>
          <input
            onChange={e => {
              this.setState({ color: e.target.value });
            }}
          />
          <h4>Feeding Instructions</h4>
          <input
            onChange={e => {
              this.setState({ feeding: e.target.value });
            }}
          />
          <Link to="/portal/profile">
            <button onClick={() => this.clickhandler()}>Submit</button>
          </Link>
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
    registerDog
  }
)(RegisterDog);
