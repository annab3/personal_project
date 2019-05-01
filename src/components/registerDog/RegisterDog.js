import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerDog } from "../../ducks/authReducer";

class RegisterDog extends Component {
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
  clickhandler() {
    this.props.registerDog(
      this.state.name,
      this.state.picture,
      this.state.breed,
      this.state.birthday,
      this.state.weight,
      this.state.color,
      this.state.feeding,
      this.props.client.client_id
    );
    this.setState({
      name: "",
      picture: "",
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
            onChange={e => {
              this.setState({ weight: e.target.value });
            }}
          />
          <label>Fur Color</label>
          <input
            onChange={e => {
              this.setState({ color: e.target.value });
            }}
          />
          <label>Feeding Instructions</label>
          <input
            onChange={e => {
              this.setState({ feeding: e.target.value });
            }}
          />
          <Link to="/portal/profile">
            <button onClick={() => this.clickhandler()}>Submit</button>
          </Link>
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
    registerDog
  }
)(RegisterDog);
