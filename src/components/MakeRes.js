import React, { Component } from "react";
import { connect } from "react-redux";
import { addPending } from "../ducks/resReducer";
import { Link } from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

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
    if (this.state.start_date < this.state.end_date) {
      this.props.addPending(
        this.state.start_date,
        this.state.end_date,
        this.state.pet
      );
      this.setState({ pet: 0, start_date: "", end_date: "" });
    } else {
      alert("Invalid Dates");
    }
  }

  render() {
    return (
      <div className="history_container">
        <div className="reservation_container2">
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

            {/* drop down calender! */}
            <label>Select Start Date</label>
            <DayPickerInput
              onDayChange={day => {
                console.log(day);
                this.setState({ start_date: day });
              }}
            />
            <label>Select End Date</label>
            <DayPickerInput
              onDayChange={day => this.setState({ end_date: day })}
            />
            <Link to="/portal/reservations">
              <button onClick={() => this.clickHandlerSubmit()}>Submit</button>
            </Link>
          </form>
        </div>
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
  { addPending }
)(MakeRes);
