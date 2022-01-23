import React, { Component } from "react";
import Demo from "./Demo";
import Groupes from "./Groupes";
import { GroupesData } from "../../Data/GroupesData";

class ScheduleLeftSideContainer extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      ScheduleLeftSideContainercountGroupeItemLayout:
        GroupesData.length +
        GroupesData[0].children.length * GroupesData.length,
    };
  }
  componentDidMount() {
    console.log(
      "----" +
        this.state.ScheduleLeftSideContainercountGroupeItemLayout +
        "-------"
    );
  }
  updatecountGroupeItem = (square_height) => {
    this.setState({
      ScheduleLeftSideContainercountGroupeItemLayout: square_height,
    });
    console.log("---- value " + square_height + "-------");
    console.log(
      "---- state " +
        this.state.ScheduleLeftSideContainercountGroupeItemLayout +
        "-------"
    ); 
    };*/

  render() {
    return (
      <div>
        <Demo />
        <Groupes
        //SquareHeight_x={this.props.SquareHeight_x}
        /* parentCallback={this.updatecountGroupeItem} */
        />
        {/*  <p>{this.state.ScheduleLeftSideContainercountGroupeItemLayout}</p> */}
      </div>
    );
  }
}
export default ScheduleLeftSideContainer;
