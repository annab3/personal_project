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
    console.log(this.props.occupied);
    let display = [];
    for (let i = 1; i <= 12; i++) {
      let innerDisplay = [];
      for (
        let j = +this.props.start.substr(8, 2);
        j <= +this.props.end.substr(8, 2);
        j++
      ) {
        let name = "";
        for (let k = 0; k < this.props.occupied.length; k++) {
          if (
            this.props.occupied[k].kennel === i &&
            +this.props.occupied[k].start_date.substr(8, 2) < j &&
            +this.props.occupied[k].end_date.substr(8, 2) > j
          ) {
            name = this.props.occupied[k].name;
          }
        }
        innerDisplay.push(name);
      }
      display.push(innerDisplay);
    }
    console.log(display);
    this.setState({ display });
  }
  render() {
    return (
      <div>
        {this.state.display.map((row, index) => (
          <div key={index} className="row">
            {row.map((box, index) => {
              if (box === "") {
                return (
                  <div key={index} className="empty">
                    {box}
                  </div>
                );
              } else {
                return (
                  <div key={index} className="full">
                    {box}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
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
