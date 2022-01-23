import React, { Component } from "react";

class Tes01 extends Component {
  state = { backgroundColour: "inherit" };
  componentWillUnmount() {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
    }
  }
  updateAndNotify = () => {
    if (this.updateTimer) return;
    this.setState({ backgroundColour: "#9b34ee" });
    this.updateTimer = setTimeout(() => {
      this.setState({ backgroundColour: "inherit" });
      this.updateTimer = null;
    }, 1000);
  };
  getSnapshotBeforeUpdate(prevProps) {
    return { notifyRequired: prevProps.text !== this.props.text };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot.notifyRequired) {
      this.updateAndNotify();
    }
  }

  render() {
    return (
      <div>
        <span
          className="label-text"
          style={{ backgroundColor: this.state.backgroundColour }}
        >
          {this.props.text}
        </span>
      </div>
    );
  }
}
export default Tes01;
