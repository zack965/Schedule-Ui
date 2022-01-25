import React, { Component } from "react";
import HeightContext from "../Context/SqueresHeightContext";

class DataLocation extends Component {
  static contextType = HeightContext;

  render() {
    const { height, DayCount, setDayCount, ItemIdGroupe } = this.context;
    return (
      <div>
        <p>{ItemIdGroupe}</p>
        <p>{DayCount}</p>
      </div>
    );
  }
}

export default DataLocation;
