import React, { Component } from "react";
import { connect } from "react-redux";
import { getHistory } from "../../ducks/resReducer";

class History extends Component {
  componentDidMount() {
    this.props.getHistory();
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
      <div className="history_container">
        <div className="reservation_container2">
          <br />
          <h2>Past Reservations</h2>
          {this.props.history[0] ? (
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
                {this.props.history.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td>{this.displayDate(row.start_date)}</td>
                      <td>{this.displayDate(row.end_date)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h5>No Reservations to Display</h5>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    history: state.resReducer.history
  };
}

export default connect(
  mapStateToProps,
  { getHistory }
)(History);
