import React, { Component } from "react";
import { connect } from "react-redux";
import AssignDisplay from "./AssignDisplay";
import {
  getOccupied,
  moveToConfirmed,
  deleteFromAllPending
} from "../../ducks/adminReducer";
import { Link, Redirect } from "react-router-dom";

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kennels: [],
      kennel: ""
    };
  }
  async componentDidMount() {
    if (this.props.pending[this.props.match.params.index]) {
      let kennels = await this.openKennels(
        this.props.pending[this.props.match.params.index].start_date,
        this.props.pending[this.props.match.params.index].end_date
      );
      this.setState({ kennels });
    }
  }
  async assignkennel(res) {
    let kennel = +this.state.kennel;
    let open = this.state.kennels.includes(kennel);
    if (open) {
      let confirmed = { ...res, kennel: kennel };
      await this.props.moveToConfirmed(confirmed);
      this.props.deleteFromAllPending(confirmed.pending_id);
      this.setState({ kennels: [], kennel: "" });
    } else {
      alert("Kennel All Ready Taken");
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
  render() {
    if (!this.props.pending[this.props.match.params.index]) {
      return <Redirect to="/admin" />;
    } else {
      return (
        <div className="admin_container">
          <h3>
            {`${this.displayDate(
              this.props.pending[this.props.match.params.index].start_date
            )} - 
        
          ${this.displayDate(
            this.props.pending[this.props.match.params.index].end_date
          )} ${this.props.pending[this.props.match.params.index].name} ${
              this.props.pending[this.props.match.params.index].first_name
            } ${this.props.pending[this.props.match.params.index].last_name}`}

            <select onChange={e => this.setState({ kennel: e.target.value })}>
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
              className="confirm-button"
              onClick={() =>
                this.assignkennel(
                  this.props.pending[this.props.match.params.index]
                )
              }
            >
              Confirm
            </button>
          </h3>

          <Link to="/admin">
            <button className="login_page-button">Cancel</button>
          </Link>
          <div>
            <AssignDisplay
              start={
                this.props.pending[this.props.match.params.index].start_date
              }
              end={this.props.pending[this.props.match.params.index].end_date}
            />
          </div>
        </div>
      );
    }
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
  { getOccupied, moveToConfirmed, deleteFromAllPending }
)(Assign);
