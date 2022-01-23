import React, { Component } from "react";
import "../Styles/All.css";
import "../Styles/Layout.css";
import ScheduleLeftSideContainer from "./ScheduleLeftSide/ScheduleLeftSideContainer";
import SchedulerRightSideContainer from "./SchedulerRightSide/SchedulerRightSideContainer";
import { GroupesData } from "../Data/GroupesData";

export default class Layout extends Component {
  render() {
    return (
      <div className="GlobalLayoutContainer">
        <ScheduleLeftSideContainer />
        <SchedulerRightSideContainer />
      </div>
    );
  }
}
//GlobalLayoutContainer
