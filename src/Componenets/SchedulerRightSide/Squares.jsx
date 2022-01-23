import moment from "moment";
import React, { Component } from "react";
import HeightContext from "../../Context/SqueresHeightContext";
import "../../Styles/Squares.css";
class Squares extends Component {
  static contextType = HeightContext;

  constructor(props) {
    super(props);

    this.state = {
      DayCount: moment().daysInMonth(),
      DayCountArr: [],
      SquareHeight: localStorage.getItem("square_height"),
      SquareHeight_arr: [],
      specialdays: [
        3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27,
        28, 31, 32, 33, 34, 35,
      ],
    };
  }
  fillSquareHeight_arr = () => {
    let SquareHeight_arr_x = [...this.state.SquareHeight_arr];
    for (let index = 0; index < this.state.SquareHeight; index++) {
      SquareHeight_arr_x.push(index + 1);
    }
    this.setState({ SquareHeight_arr: SquareHeight_arr_x });
  };
  fillDayCountArr = () => {
    let DayCountArr_x = [...this.state.DayCountArr];
    for (let index = 0; index < this.state.DayCount; index++) {
      DayCountArr_x.push(index + 1);
    }
    this.setState({ DayCountArr: DayCountArr_x });
    //console.log(this.state.DayCountArr);
  };
  updateAndNotify = () => {
    this.setState({ SquareHeight: this.props.SquareHeight_x });
    this.fillSquareHeight_arr();
  };
  componentDidMount() {
    this.fillSquareHeight_arr();
    this.fillDayCountArr();
  }
  runCallback = (cb) => {
    return cb();
  };

  render() {
    const { height } = this.context;
    /* return (
      <div className="SquareContainer">
        {this.state.SquareHeight_arr.map((item) => (
          <div className="SquareContainerRow" key={item}>
            {this.state.DayCountArr.map((item) => (
              <div className="SquareContainerRowItem" key={item}>
                <p></p>
              </div>
            ))}
          </div>
        ))}
        <p>{`height is: ${height}`}</p>
      </div>
    ); */
    return (
      <div className="SquareContainer">
        {this.runCallback(() => {
          const row = [];
          for (var i = 0; i < height; i++) {
            row.push(
              <div className="SquareContainerRow" key={i}>
                {/* {(()=>{
                  this.state.DayCountArr.map((item)=>)
                })()} */}
                {this.state.DayCountArr.map((item) => {
                  if (this.state.specialdays.indexOf(item) == -1) {
                    return (
                      <div className="SquareContainerRowItem" key={item}>
                        <p></p>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="SquareContainerRowItem special_day"
                        key={item}
                      >
                        <p></p>
                      </div>
                    );
                  }
                })}
              </div>
            );
          }
          return row;
        })}
      </div>
    );
  }
}

export default Squares;

/*
<div className="SquareContainerRowItem" key={item}>
                    <p></p>
                  </div>
                  */

//            {index == height ? <p></p> : {}}
/* return (
      <div className="SquareContainer">
        {this.state.SquareHeight_arr.map((item) => (
          <div className="SquareContainerRow" key={item}>
            {this.state.DayCountArr.map((item) => (
              <div className="SquareContainerRowItem" key={item}>
                <p></p>
              </div>
            ))}
          </div>
        ))}
        <p>{`height is: ${height}`}</p>
      </div>
    ); */
/* {this.state.DayCountArr.map((item) => (
              <div className="SquareContainerRowItem" key={item}>
                <p></p>
              </div>
            ))} */
