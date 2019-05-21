import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { logout } from "../ducks/authReducer";
import {
  getAllPending,
  getOccupied,
  deleteFromAllPending,
  moveToConfirmed
} from "../ducks/adminReducer";
import { deletePending } from "../ducks/resReducer";
import AssignDisplay from "./AssignDisplay";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
      prepStart: "",
      prepEnd: ""
    };

    this.autoAssignKennel = this.autoAssignKennel.bind(this);
  }
  async componentDidMount() {
    this.props.getAllPending();
    let start = new Date();
    let end = new Date(new Date().getTime() + 604800000);
    await this.setState({ start: start, end: end });
  }

  async autoAssignKennel(res) {
    let { start, end } = this.state;
    this.setState({ start: "", end: "" });
    let kennels = await this.openKennels(res.start_date, res.end_date);
    let confirmed = { ...res, kennel: kennels[0] };
    await this.props.moveToConfirmed(confirmed);
    this.props.deleteFromAllPending(confirmed.pending_id);
    this.setState({ start, end });
  }

  autoAssignAll() {
    for (let i = this.props.pending.length - 1; i >= 0; i--) {
      this.autoAssignKennel(this.props.pending[i]);
    }
  }

  async openKennels(start_date, end_date) {
    await this.props.getOccupied(start_date, end_date);
    let kennels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let start = new Date(start_date);
    let end = new Date(end_date);
    for (
      let j = start.getTime() / 1000 / 60 / 60 / 24;
      j <= end.getTime() / 1000 / 60 / 60 / 24;
      j++
    ) {
      for (let i = 0; i < kennels.length; i++) {
        for (let k = 0; k < this.props.occupied.length; k++) {
          if (
            this.props.occupied[k].kennel === kennels[i] &&
            new Date(this.props.occupied[k].start_date).getTime() /
              1000 /
              60 /
              60 /
              24 <
              j &&
            new Date(this.props.occupied[k].end_date).getTime() /
              1000 /
              60 /
              60 /
              24 >
              j
          ) {
            kennels.splice(i, 1);
          }
        }
      }
    }
    return kennels;
  }

  displayDate(date) {
    let newDate = new Date(date).toString();

    let endDate = newDate
      .split(" ")
      .splice(0, 4)
      .join(" ");
    return endDate;
  }
  async clickHandler() {
    await this.setState({ start: "", end: "" });
    let start = this.state.prepStart;
    let end = this.state.prepEnd;
    this.setState({ start, end, prepStart: "", prepEnd: "" });
  }

  render() {
    return (
      <div className="reservation_container">
        <div className="reservation_container2">
          <h2>Pending Reservations</h2>
          {/* table of pending reservations */}
          {!this.props.pending[0] ? (
            <h5>No Reservations to Display</h5>
          ) : (
            <div className="admin_container">
              <div>
                <table className="reservation_table">
                  <tbody>
                    <tr>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Pet Name</th>
                      <th>Client Name</th>
                      <th>Cancel</th>
                      <th>Availability</th>
                    </tr>
                    {this.props.pending.map((row, index) => {
                      return (
                        <tr key={index}>
                          <td>{this.displayDate(row.start_date)}</td>
                          <td>{this.displayDate(row.end_date)}</td>
                          <td>{row.name}</td>
                          <td>{`${row.first_name} ${row.last_name}`}</td>
                          <td>
                            <h3
                              onClick={() => {
                                this.props.deletePending(row.pending_id);
                              }}
                            >
                              X
                            </h3>
                          </td>
                          <td>
                            <Link
                              className="link"
                              to={`/admin/assign/${index}`}
                            >
                              <h4>view kennels</h4>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <button
                className="login_page-button"
                onClick={() => this.autoAssignAll()}
              >
                auto assign all
              </button>
            </div>
          )}
          <div>
            <h3>Search Dates</h3>
            <DayPickerInput
              onDayChange={day => this.setState({ prepStart: day })}
            />
            <DayPickerInput
              onDayChange={day => this.setState({ prepEnd: day })}
            />
            <button onClick={() => this.clickHandler()}>Submit</button>
            <h3>
              {this.displayDate(this.state.start)} -
              {this.displayDate(this.state.end)}
            </h3>
            {this.state.start === "" || this.state.end === "" ? (
              <div>Loading</div>
            ) : (
              <AssignDisplay start={this.state.start} end={this.state.end} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pending: state.adminReducer.allPending,
    occupied: state.adminReducer.occupied
  };
}

export default connect(
  mapStateToProps,
  {
    logout,
    getAllPending,
    deletePending,
    getOccupied,
    deleteFromAllPending,
    moveToConfirmed
  }
)(Admin);
