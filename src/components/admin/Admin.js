import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";
import { Link } from "react-router-dom";
import { getAllPending, getOccupied } from "../../ducks/adminReducer";
import { deletePending } from "../../ducks/resReducer";
import AssignDisplay from "./AssignDisplay";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assign: ""
    };
  }
  componentDidMount() {
    this.props.getAllPending();
  }
  // need to figure out how to use this to display options and auto assign

  async openKennels(start, end) {
    await this.props.getOccupied(start, end);
    console.log(this.props.occupied);
    let kennels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for (let i = 1; i <= 12; i++) {
      for (let j = +start.substr(8, 2); j <= +end.substr(8, 2); j++)
        for (let k = 0; k < this.props.occupied.length; k++) {
          if (
            this.props.occupied[k].kennel === i &&
            +this.props.occupied[k].start_date.substr(8, 2) < j &&
            +this.props.occupied[k].end_date.substr(8, 2) > j
          ) {
            kennels.splice(kennels.indexOf(i), 1);
          }
        }
    }
    return kennels;
  }

  render() {
    return (
      <div>
        Admin Page
        <Link to="/home">
          <button onClick={() => this.props.logout()}>Logout</button>
        </Link>
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
                      <td>
                        {row.start_date
                          .substr(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td>
                        {row.end_date
                          .substr(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td>{row.name}</td>
                      <td>{`${row.first_name} ${row.last_name}`}</td>
                      <td>
                        <select>
                          {this.openKennels(row.start_date, row.end_date).map(
                            num => (
                              <option>{num}</option>
                            )
                          )}
                        </select>
                        <button
                          onClick={() => {
                            this.props.deletePending(row.pending_id);
                          }}
                        >
                          X
                        </button>
                        <button
                          onClick={() => {
                            console.log(this.state.assign);
                            this.setState({ assign: index });
                          }}
                        >
                          view kennels
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button>auto assign all</button>
          </div>
        ) : !this.props.pending[0] && this.state.assign === "" ? (
          <h5>No Reservations to Display</h5>
        ) : (
          <div>
            <h5>
              {`${this.props.pending[this.state.assign].start_date
                .substr(0, 10)
                .split("-")
                .reverse()
                .join("-")} - 
        
          ${this.props.pending[this.state.assign].end_date
            .substr(0, 10)
            .split("-")
            .reverse()
            .join("-")} ${this.props.pending[this.state.assign].name} ${
                this.props.pending[this.state.assign].first_name
              } ${this.props.pending[this.state.assign].last_name}`}
            </h5>
            <div>
              <AssignDisplay
                start={this.props.pending[this.state.assign].start_date}
                end={this.props.pending[this.state.assign].end_date}
              />
            </div>
          </div>
        )}
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
  { logout, getAllPending, deletePending, getOccupied }
)(Admin);
