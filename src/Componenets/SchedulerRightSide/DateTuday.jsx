import moment from "moment";
import React, { Component } from "react";
import "../../Styles/DateTuday.css";
class DateTuday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "",
    };
  }
  componentDidMount() {
    this.setState({ Date: moment().format("MMMM YYYY") });
  }

  render() {
    return (
      <div className="DateTudayContainer">
        <p>{this.state.Date}</p>
        {/* <p>{moment().daysInMonth()}</p> */}
      </div>
    );
  }
}
export default DateTuday;
