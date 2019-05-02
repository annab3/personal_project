import React, { Component } from "react";
import { connect } from "react-redux";
import { addPending } from "../../ducks/resReducer";
import { Link } from "react-router-dom";

class MakeRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: 0,
      start_date: "",
      end_date: ""
    };
  }
  clickHandlerSubmit() {
    this.props.addPending(
      this.state.start_date,
      this.state.end_date,
      this.state.pet
    );
    this.setState({ pet: 0, start_date: "", end_date: "" });
  }
  render() {
    return (
      <form>
        <select onChange={e => this.setState({ pet: e.target.value })}>
          <option>Select Pet</option>
          {this.props.pets.map((pet, index) => {
            return (
              <option key={index} value={pet.dog_id}>
                {pet.name}
              </option>
            );
          })}
        </select>
        {/* need to add drop down calender! */}
        <label>Select Start Date</label>
        <input
          required
          onChange={e => this.setState({ start_date: e.target.value })}
        />
        <label>Select End Date</label>
        <input
          required
          onChange={e => this.setState({ end_date: e.target.value })}
        />
        <Link to="/portal/resevations">
          <button onClick={() => this.clickHandlerSubmit()}>Submit</button>
        </Link>
      </form>
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
  { addPending }
)(MakeRes);
