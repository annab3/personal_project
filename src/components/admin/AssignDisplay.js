import React, { Component } from "react";
import { connect } from "react-redux";
import { getOccupied } from "../../ducks/adminReducer";

class AssignDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: []
    };
  }
  async componentDidMount() {
    await this.props.getOccupied(this.props.start, this.props.end);
    this.createDisplay();
  }
  createDisplay() {
    let display = [];
    let start = new Date(this.props.start);
    let end = new Date(this.props.end);
    for (let i = 1; i <= 12; i++) {
      let innerDisplay = [];
      for (
        let j = start.getTime() / 1000 / 60 / 60 / 24;
        j <= end.getTime() / 1000 / 60 / 60 / 24;
        j++
      ) {
        let name = "";
        for (let k = 0; k < this.props.occupied.length; k++) {
          if (
            this.props.occupied[k].kennel === i &&
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
            name = this.props.occupied[k].name;
          }
        }
        innerDisplay.push(name);
      }
      innerDisplay.unshift(i);
      display.push(innerDisplay);
    }
    this.setState({ display });
  }
  render() {
    return (
      <table className="assign_table">
        <tbody>
          {this.state.display.map((row, index) => (
            <tr key={index} className="row">
              {row.map((box, index) => {
                if (box === "") {
                  return <td key={index} className="empty" />;
                } else {
                  return (
                    <td key={index} className="full">
                      <p>{box}</p>
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    occupied: state.adminReducer.occupied,
    kennelDisplay: state.adminReducer.kennelDisplay
  };
}
export default connect(
  mapStateToProps,
  { getOccupied }
)(AssignDisplay);
