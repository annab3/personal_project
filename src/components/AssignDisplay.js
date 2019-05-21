import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getOccupied } from "../ducks/adminReducer";

class AssignDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      dates: []
    };
    this.displayDate = this.displayDate.bind(this);
  }
  async componentDidMount() {
    await this.props.getOccupied(this.props.start, this.props.end);
    this.createDisplay();
  }
  displayDate(date) {
    let newDate = new Date(date).toString();

    let endDate = newDate
      .split(" ")
      .splice(1, 2)
      .join(" ");
    return endDate;
  }
  async createDisplay() {
    let display = [];
    let dates = [];
    let start = new Date(this.props.start);
    let end = new Date(this.props.end);
    for (let i = 1; i <= 12; i++) {
      let innerDisplay = [];
      for (
        let j = start.getTime() / 1000 / 60 / 60 / 24;
        j <= end.getTime() / 1000 / 60 / 60 / 24;
        j++
      ) {
        if (i === 1) {
          let day = await this.displayDate(new Date(j * 1000 * 60 * 60 * 24));
          dates.push({ name: day });
        }
        let name = "";
        let id;
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
            id = this.props.occupied[k].id;
          }
        }
        innerDisplay.push({ name, id });
      }
      innerDisplay.unshift({ name: i });
      display.push(innerDisplay);
    }
    dates.unshift("");
    display.unshift(dates);
    this.setState({ display });
  }
  render() {
    return (
      <div className="assign_table">
        <div>
          {/* <table>
          <tbody>
            {this.state.display.map((row, index) => (
              <tr key={index} className="row">
                {row.map((box, index) => {
                  if (box.name === "") {
                    return <td key={index} className="empty" />;
                  } else if (box.id) {
                    return (
                      <Link className="link" to={`/admin/edit/${box.id}`}>
                        <td key={`${index} ${box.id}`} className="full">
                          <p>{box.name}</p>
                        </td>
                      </Link>
                    );
                  } else {
                    return (
                      <td key={index} className="full">
                        <p>{box.name}</p>
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table> */}
          {this.state.display.map((row, index) => (
            <div key={index} className="row">
              {row.map((box, index) => {
                if (box.name === "") {
                  return <div key={index} className="empty" />;
                } else if (box.id) {
                  return (
                    <Link className="link" to={`/admin/edit/${box.id}`}>
                      <div key={`${index} ${box.id}`} className="full">
                        <p>{box.name}</p>
                      </div>
                    </Link>
                  );
                } else {
                  return (
                    <div key={index} className="full">
                      <p>{box.name}</p>
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
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
