import moment from "moment";
import React, { Component } from "react";
import HeightContext from "../../Context/SqueresHeightContext";
import "../../Styles/DaysCount.css";

class DaysCount extends Component {
  static contextType = HeightContext;
  constructor(props) {
    super(props);

    this.state = {
      count: moment().daysInMonth(),
      countArr: [],
      elementsParagraphs: [],
    };
  }
  //moment().daysInMonth()
  componentDidMount() {
    let countArr_x = [...this.state.countArr];
    for (let index = 0; index < this.state.count; index++) {
      countArr_x.push(index + 1);
    }
    this.setState({ countArr: countArr_x });
    /* let elements = document.getElementsByClassName("ItemDivParagraph");
    console.log(elements);
    elements[this.context.DayCount].style.backgroundColor = "black";
    elements[this.context.DayCount].style.color = "white"; */
    //this.setState({ elementsParagraphs: elements });
    //console.log(this.state.elementsParagraphs);
    /* let elementsParagraphs_x = [...this.state.elementsParagraphs];
    for (let index = 0; index < elements.length; index++) {
      elementsParagraphs_x.push(elements[index]);
    }
    this.setState({ elementsParagraphs: elementsParagraphs_x });
    console.log(this.state.elementsParagraphs); */
  }

  render() {
    /* let elements = document.getElementsByClassName("ItemDivParagraph");
    console.log(elements); */
    //const { DayCount } = this.context;
    /*  elements[0].style.color = "red";
    elements[0].style.backgroundColor = "red"; */
    //console.log(elements[DayCount]);
    /* elements[5].style.backgroundColor = "black";
    elements[5].style.color = "white"; */
    const { DayCount } = this.context;
    /* for (let index = 0; index < moment().daysInMonth(); index++) {
      //console.log(index);
      this.state.count.push(index + 1);
    } */
    return (
      <div className="ItemDivContainerDayNumber">
        {this.state.countArr.map((item, index) => {
          if (DayCount == item) {
            return (
              <p key={index} className="ItemDivParagraph bgBlack">
                {item}
              </p>
            );
          } else {
            return (
              <p key={index} className="ItemDivParagraph">
                {item}
              </p>
            );
          }
        })}
        {/* {this.state.countArr.map((item, index) => (
          <p key={index} className="ItemDivParagraph">
            {item}
          </p>
        ))} */}
      </div>
    );
  }
}
export default DaysCount;
/*
  <p key={index} className="ItemDivParagraph">
            {item}
          </p>
          */
