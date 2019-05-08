import React, { Component } from "react";
import { connect } from "react-redux";
import { getHistory } from "../../ducks/resReducer";

class History extends Component {
  componentDidMount() {
    this.props.getHistory();
  }
  render() {
    return (
      <div className="history_container">
        Past Reservations
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h5>No Reservations to Display</h5>
        )}
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
