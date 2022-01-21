import React, { Component } from "react";
import DateTuday from "./DateTuday";
import DaysCount from "./DaysCount";
import Squares from "./Squares";

class SchedulerRightSideContainer extends Component {
  render() {
    return (
      <div>
        <DateTuday />
        <DaysCount />
        <Squares />
      </div>
    );
  }
}
export default SchedulerRightSideContainer;
