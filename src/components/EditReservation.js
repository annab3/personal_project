import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRes, deleteRes } from "../ducks/adminReducer";

class EditReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    await this.props.getRes(this.props.match.params.id);
    this.setState({ loading: false });
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
    if (this.state.loading) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="history_container">
          <div className="reservation_container2">
            <table className="reservation_table">
              <tbody>
                <tr>
                  <th>Pet Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Kennel</th>
                  <th>Client Name</th>
                  <th>Cancel</th>
                </tr>
                <tr>
                  <td>{this.props.reservation.name}</td>
                  <td>{this.displayDate(this.props.reservation.start_date)}</td>
                  <td>{this.displayDate(this.props.reservation.end_date)}</td>
                  <td>{this.props.reservation.kennel}</td>
                  <td>{`${this.props.reservation.first_name} ${
                    this.props.reservation.last_name
                  }`}</td>
                  <td>
                    <Link className="link" to="/admin">
                      <h3
                        onClick={() => {
                          this.props.deleteRes(this.props.match.params.id);
                        }}
                      >
                        X
                      </h3>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link className="link" to="/admin">
              <button className="login_page-button">Cancel</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    reservation: state.adminReducer.reservation
  };
}
export default connect(
  mapStateToProps,
  { getRes, deleteRes }
)(EditReservation);
