/* import moment from "moment";
import React, { Component } from "react";

class Squares extends Component {
  render() {
    for (
      let index = 0;
      index < localStorage.getItem("square_height");
      index++
    ) {
      return(
        <div className="SquareContainer">
          <p></p>
        </div>;
      )
      for (let j = 0; j < moment().daysInMonth(); j++) {
        return 
      }
    }
  }
}
export default Squares;
 */
import moment from "moment";
import React, { Component } from "react";

class Squares extends Component {
  render() {
    return (
      <div className="SquareContainer">
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
      </div>
    );
  }
}
export default Squares;
