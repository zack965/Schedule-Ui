import React, { Component } from "react";

const DayCounrContext = React.createContext();

class DayCountProvider extends Component {
  // Context state
  state = {
    DayCount: 6,
  };

  // Method to update state
  setDayCount = (DayCount) => {
    this.setState({ DayCount: DayCount });
  };

  render() {
    const { children } = this.props;
    const { DayCount } = this.state;
    const { setDayCount } = this;

    return (
      <DayCounrContext.Provider
        value={{
          DayCount,
          setDayCount,
        }}
      >
        {children}
      </DayCounrContext.Provider>
    );
  }
}

export default DayCounrContext;
export { DayCountProvider };
