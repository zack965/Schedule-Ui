import React, { Component } from "react";
import { GroupesData } from "../Data/GroupesData";

const HeightContext = React.createContext();

class HeightProvider extends Component {
  // Context state
  state = {
    height:
      GroupesData.length + GroupesData[0].children.length * GroupesData.length,
    DayCount: "",
    ItemIdGroupe: 0,
    ResourceId: "G1",
  };

  // Method to update state
  setHeight = (height) => {
    this.setState({ height: height });
  };
  setDayCount = (DayCount) => {
    this.setState({ DayCount: DayCount });
  };
  setItemIdGroupe = (ItemIdGroupe) => {
    this.setState({ ItemIdGroupe: ItemIdGroupe });
  };

  render() {
    const { children } = this.props;
    const { height, DayCount, ItemIdGroupe } = this.state;
    const { setHeight, setDayCount, setItemIdGroupe } = this;

    return (
      <HeightContext.Provider
        value={{
          height,
          setHeight,
          DayCount,
          setDayCount,
          ItemIdGroupe,
          setItemIdGroupe,
        }}
      >
        {children}
      </HeightContext.Provider>
    );
  }
}

export default HeightContext;
export { HeightProvider };
