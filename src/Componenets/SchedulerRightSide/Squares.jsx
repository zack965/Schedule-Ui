import moment from "moment";
import React, { Component } from "react";
import "../../Styles/Squares.css";
class Squares extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DayCount: moment().daysInMonth(),
      DayCountArr: [],
      SquareHeight: localStorage.getItem("square_height"),
      SquareHeight_arr: [],
    };
  }
  fillSquareHeight_arr = () => {
    //this.setState({ SquareHeight_arr: [this.state.SquareHeight_arr, 5] });
    let SquareHeight_arr_x = [...this.state.SquareHeight_arr];
    for (let index = 0; index < this.state.SquareHeight; index++) {
      SquareHeight_arr_x.push(index + 1);
    }
    this.setState({ SquareHeight_arr: SquareHeight_arr_x });
    console.log(this.state.SquareHeight_arr);
  };
  fillDayCountArr = () => {
    let DayCountArr_x = [...this.state.DayCountArr];
    for (let index = 0; index < this.state.DayCount; index++) {
      DayCountArr_x.push(index + 1);
    }
    this.setState({ DayCountArr: DayCountArr_x });
    console.log(this.state.DayCountArr);
  };
  componentDidMount() {
    this.fillSquareHeight_arr();
    this.fillDayCountArr();
  }
  RenderSquareHeight = () => {
    const doubled = this.state.SquareHeight_arr.map((number) => number * 2);
    console.log(doubled);
    return this.state.SquareHeight_arr.map((item) => <p>{item}</p>);
  };

  render() {
    return (
      <div className="SquareContainer">
        {/*  {(() => {
          console.log(this.state.SquareHeight_arr);
          return this.state.SquareHeight_arr.map((item) => <p>{item}</p>);
        })()} */}
        {this.state.SquareHeight_arr.map((item) => (
          <div className="SquareContainerRow">
            {/* <p> ||{item} ||</p> <br /> */}
            {this.state.DayCountArr.map((item) => (
              <div className="SquareContainerRowItem">
                <p></p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Squares;
