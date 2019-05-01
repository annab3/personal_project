import React from "react";
import { connect } from "react-redux";

function History(props) {
  return (
    <div>
      Past Reservations
      {props.history[0] ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
            {props.history.map((row, index) => {
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

function mapStateToProps(state) {
  return {
    history: state.resReducer.history
  };
}

export default connect(mapStateToProps)(History);
