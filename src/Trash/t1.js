/* import moment from "moment";
import React, { Component } from "react";

class Squares extends Component {
  constructor(props) {
    super(props);

    this.state = {
      square_height: localStorage.getItem("square_height"),
      square_height_arr: [1, 2, 3, 4, 5, 6],
    };
  }
  fill_square_height_arr = () => {
    for (let index = 0; index < this.state.square_height; index++) {
      /* this.setState({
        square_height_arr: [...this.state.square_height_arr, 55],
      });
      this.state.square_height_arr.push(index + 1);
    }
  };
  componentDidMount() {
    this.fill_square_height_arr();
    /* console.log(this.state.square_height);
    console.log(this.state.square_height_arr);
    console.log(moment().daysInMonth()); 
  }
  render() {
    return (
      <div className="SquareContainer">
        {this.state.square_height_arr.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {(() => {
          for (
            let index = 0;
            index < this.state.square_height_arr.length;
            index++
          ) {
            return <p>hello</p>;
          }
        })()}
      </div>
    );
  }
}
export default Squares; */
/*

         {(() => {
          for (
            let index = 0;
            index < localStorage.getItem("square_height");
            index++
          ) {
            return (
              <div className="SquareRowContainer">
                {(() => {
                  for (let j = 0; j < moment().daysInMonth(); j++) {
                    return <p className="SquareItemrOW">P</p>;
                  }
                })()}
              </div>
            );
          }
        })()} 
        */
/*
import moment from "moment";
import React, { useState, useEffect } from "react";

function Squares() {
  const [square_height_arr, setsquare_height_arr] = useState([
    1, 2, 3, 4, 5, 6,
  ]);
  const [DayCount, setDayCount] = useState(moment().daysInMonth());
  const [DayCountArr, setDayCountArr] = useState([]);
  const [square_height, setsquare_height] = useState(
    localStorage.getItem("square_height")
  );
  useEffect(() => {
    for (let index = 0; index < DayCount; index++) {
      setDayCountArr([...DayCountArr, index]);
    }
    console.log(DayCount);
    console.log(DayCountArr);
  }, []);

  return (
    <div>
      {square_height_arr.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default Squares;
*/
