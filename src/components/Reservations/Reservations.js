import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePending,
  deleteConfirmed,
  getPending,
  getConfirmed
} from "../../ducks/resReducer";

class Reservations extends Component {
  componentDidMount() {
    this.props.getConfirmed();
    this.props.getPending();
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
      <div className="reservation_container">
        Reservations
        <Link to="/portal/make_reservation">
          <button>Make New Reservation</button>
        </Link>
        <h2>Pending Reservations</h2>
        {/* table of pending reservations */}
        {this.props.pending[0] ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Cancel</th>
              </tr>
              {this.props.pending.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{this.displayDate(row.start_date)}</td>
                    <td>{this.displayDate(row.end_date)}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.deletePending(row.pending_id);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h5>No Reservations to Display</h5>
        )}
        {/* delete button on last collum of table */}
        <h2>Confirmed Reservations</h2>
        {/* table of confirmed reservations */}
        {this.props.confirmed[0] ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Cancel</th>
              </tr>
              {this.props.confirmed.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{this.displayDate(row.start_date)}</td>
                    <td>{this.displayDate(row.end_date)}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.deleteConfirmed(row.id);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h5>No Reservations to Display</h5>
        )}
        {/* delete button on last collum of table */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    confirmed: state.resReducer.confirmed,
    pending: state.resReducer.pending
  };
}

export default connect(
  mapStateToProps,
  { deletePending, deleteConfirmed, getConfirmed, getPending }
)(Reservations);
