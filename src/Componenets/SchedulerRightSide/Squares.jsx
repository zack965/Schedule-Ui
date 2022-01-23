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
      rox: "",
      column: "",
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
  PrintGroupes = () => {
    const { height, DayCount, setDayCount, setItemIdGroupe } = this.context;
    const row = [];
    for (let i = 0; i < height; i++) {
      row.push(
        <div
          className="SquareContainerRow"
          key={i}
          id={i}
          onMouseEnter={() => {
            //setDayCount(item);
            setItemIdGroupe(i);
            //console.log(i._targetInst.key);
            //console.log(i);
          }}
        >
          {this.state.DayCountArr.map((item) => {
            if (this.state.specialdays.indexOf(item) == -1) {
              return (
                <div
                  className="SquareContainerRowItem"
                  key={item}
                  onMouseEnter={() => {
                    setDayCount(item);
                    //setItemIdGroupe(i);
                  }}
                >
                  <p></p>
                </div>
              );
            } else {
              return (
                <div
                  className="SquareContainerRowItem special_day"
                  key={item}
                  onMouseEnter={() => {
                    setDayCount(item);
                  }}
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
  };

  render() {
    //const { height, DayCount, setDayCount, setItemIdGroupe } = this.context;
    return <div className="SquareContainer">{this.PrintGroupes()}</div>;
  }
}

export default Squares; /* return (


/*
 return (
      <div className="SquareContainer">
        {this.runCallback(() => {
          const row = [];
          let i_x = 0;
          for (var i = 0; i < height; i++) {
            //i_x = i;
            console.log(i);
            row.push(
              <div
                className="SquareContainerRow"
                key={i}
                id={i}
                onMouseEnter={(i) => {
                  //setDayCount(item);
                  //setItemIdGroupe(i);
                  //console.log(i._targetInst.key);
                  //console.log();
                }}
              >
        
                {this.state.DayCountArr.map((item) => {
                  if (this.state.specialdays.indexOf(item) == -1) {
                    return (
                      <div
                        className="SquareContainerRowItem"
                        key={item}
                        onMouseEnter={() => {
                          setDayCount(item);
                          //setItemIdGroupe(i);
                        }}
                      >
                        <p></p>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="SquareContainerRowItem special_day"
                        key={item}
                        onMouseEnter={() => {
                          setDayCount(item);
                        }}
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
        <p>{DayCount}</p>
      </div>
    );
    
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
