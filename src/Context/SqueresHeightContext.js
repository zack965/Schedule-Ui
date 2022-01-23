import React, { Component } from "react";
import { GroupesData } from "../Data/GroupesData";

const HeightContext = React.createContext();

class HeightProvider extends Component {
  // Context state
  state = {
    height:
      GroupesData.length + GroupesData[0].children.length * GroupesData.length,
  };

  // Method to update state
  setHeight = (height) => {
    this.setState({ height: height });
  };

  render() {
    const { children } = this.props;
    const { height } = this.state;
    const { setHeight } = this;

    return (
      <HeightContext.Provider
        value={{
          height,
          setHeight,
        }}
      >
        {children}
      </HeightContext.Provider>
    );
  }
}

export default HeightContext;
export { HeightProvider };
