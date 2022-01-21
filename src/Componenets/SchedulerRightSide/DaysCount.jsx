import moment from "moment";
import React, { Component } from "react";
import "../../Styles/DaysCount.css";

class DaysCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: [],
    };
  }
  //moment().daysInMonth()

  render() {
    for (let index = 0; index < moment().daysInMonth(); index++) {
      //console.log(index);
      this.state.count.push(index + 1);
    }
    return (
      <div className="ItemDivContainerDayNumber">
        {this.state.count.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
}
export default DaysCount;
