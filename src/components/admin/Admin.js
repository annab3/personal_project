import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";
import { Link } from "react-router-dom";
import {
  getAllPending,
  getOccupied,
  deleteFromAllPending,
  moveToConfirmed
} from "../../ducks/adminReducer";
import { deletePending } from "../../ducks/resReducer";
import AssignDisplay from "./AssignDisplay";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assign: "",
      kennels: [],
      kennel: ""
    };
    this.clickCancelHandler = this.clickCancelHandler.bind(this);
    this.autoAssignKennel = this.autoAssignKennel.bind(this);
  }
  componentDidMount() {
    this.props.getAllPending();
  }
  async clickAssignHandler(start_date, end_date, index) {
    let kennels = await this.openKennels(start_date, end_date);
    this.setState({ assign: index, kennels });
  }
  async autoAssignKennel(res) {
    let kennels = await this.openKennels(res.start_date, res.end_date);
    let confirmed = { ...res, kennel: kennels[0] };
    await this.props.moveToConfirmed(confirmed);
    this.props.deleteFromAllPending(confirmed.pending_id);
  }
  async assignkennel(res) {
    let kennel = +this.state.kennel;
    let open = this.state.kennels.includes(kennel);
    if (open) {
      let confirmed = { ...res, kennel: kennel };
      await this.props.moveToConfirmed(confirmed);
      this.props.deleteFromAllPending(confirmed.pending_id);
      this.setState({ assign: "", kennels: [], kennel: "" });
    } else {
      alert("Kennel All Ready Taken");
    }
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
  clickCancelHandler() {
    this.setState({ assign: "" });
  }
  displayDate(date) {
    let newDate = new Date(date).toString();

    let endDate = newDate
      .split(" ")
      .splice(0, 4)
      .join(" ");
    return endDate;
  }

  render() {
    return (
      <div>
        <ul className="portal_nav">
          <Link to="/">
            <button onClick={() => this.props.logout()}>Logout</button>
          </Link>
        </ul>
        <div className="admin_container">
          <h2>Pending Reservations</h2>
          {/* table of pending reservations */}
          {this.props.pending[0] && this.state.assign === "" ? (
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Pet Name</th>
                    <th>Client Name</th>
                    <th>Cancel</th>
                  </tr>
                  {this.props.pending.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>{this.displayDate(row.start_date)}</td>
                        <td>{this.displayDate(row.end_date)}</td>
                        <td>{row.name}</td>
                        <td>{`${row.first_name} ${row.last_name}`}</td>
                        <td>
                          <button
                            onClick={() => {
                              this.props.deletePending(row.pending_id);
                            }}
                          >
                            X
                          </button>
                          <button
                            onClick={() =>
                              this.clickAssignHandler(
                                row.start_date,
                                row.end_date,
                                index
                              )
                            }
                          >
                            view kennels
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button onClick={() => this.autoAssignAll()}>
                auto assign all
              </button>
            </div>
          ) : !this.props.pending[0] && this.state.assign === "" ? (
            <h5>No Reservations to Display</h5>
          ) : (
            <div>
              <h5>
                {`${this.displayDate(
                  this.props.pending[this.state.assign].start_date
                )} - 
        
          ${this.displayDate(this.props.pending[this.state.assign].end_date)} ${
                  this.props.pending[this.state.assign].name
                } ${this.props.pending[this.state.assign].first_name} ${
                  this.props.pending[this.state.assign].last_name
                }`}

                <select
                  onChange={e => this.setState({ kennel: e.target.value })}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <button
                  onClick={() =>
                    this.assignkennel(this.props.pending[this.state.assign])
                  }
                >
                  Confirm
                </button>
              </h5>

              <button onClick={() => this.clickCancelHandler()}>Cancel</button>
              <div>
                <AssignDisplay
                  start={this.props.pending[this.state.assign].start_date}
                  end={this.props.pending[this.state.assign].end_date}
                  clickCancelHandler={this.clickCancelHandler}
                />
              </div>
            </div>
          )}
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
