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
/* this.setState({
          groupe_id_arr: [...this.state.groupe_id_arr, id],
        }); */
/*  getSnapshotBeforeUpdate = (prevProps) => {
    return {
      notifyRequired: prevProps.SquareHeight_x !== this.props.SquareHeight_x,
    };
  };
 */
/*  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    //if (nextProps.SquareHeight_x !== this.state.SquareHeight_x) {
    this.setState({ SquareHeight: nextProps.SquareHeight_x });
    //}
  } */

/* componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot.notifyRequired) {
      this.updateAndNotify();
    }
  } */
/* componentDidUpdate() {
    this.fillSquareHeight_arr();
    this.fillDayCountArr();
  } */
/*  RenderSquareHeight = () => {
    const doubled = this.state.SquareHeight_arr.map((number) => number * 2);
    console.log(doubled);
    return this.state.SquareHeight_arr.map((item) => <p>{item}</p>);
  }; */
/* for (let index = 0; index < GroupesData[0].children.length; index++) {
      this.state.is_down_data.push(0);
    } */
/* {
{(() => {
          console.log(this.state.SquareHeight_arr);
          return this.state.SquareHeight_arr.map((item) => <p>{item}</p>);
        })()} 
}
 */
//document.getElementsByClassName(i+j)
/* for (
          let j = 0;
          j < document.getElementsByClassName(i + j).length;
          j++
        ) {
          console.log(i + j);
        } */

/* SquareContainerRow[i].children.style.backgroundColor = "red";
        SquareContainerRow[i].children.style.color = "black"; */
/* for (let i = 0; i < SquareContainerRow.length; i++) {
      if (this.state.EventResource_Arr.indexOf(0).toString() == "-1") {
        console.log("ok");
      }
    } */
//console.log(this.state.EventResource_Arr);
/* if (this.state.EventResource_Arr.indexOf(0) == "-1") {
      console.log("ok");
    } */

//this.setState({ EventResource_Arr: EventResource_Arr_x });
//console.log(EventResource_Arr_x);

/* EventResource_Arr_x.forEach(function (value) {
      console.log(value);
       this.setState({
         EventResource_Arr:
           
       });
    }); */
//console.log(object)
/*  this.setState({
      EventResource_Arr: this.state.EventResource_Arr.push(EventResource_Arr_x),
    });
    console.log(EventResource_Arr_x);
    console.log(this.state.EventResource_Arr);
    console.log(this.state.EventResource_Arr[0]); */
/*if (!this.state.EventResource_Arr.indexOf(i) == "-1") {
        console.log(i);
        console.log(SquareContainerRow[i]);
        console.log(i);
        console.log("ok");
        SquareContainerRow[i].style.backgroundColor = "red";
        SquareContainerRow[i].style.color = "black"; 
      }*/
//console.log(document.querySelectorAll(".11"));
/* let childrens = SquareContainerRow[i];
        console.log(childrens); */
//console.log(childrens[0]);
/* for (let j = 1; j <= this.state.DayCount; j++) {
          console.log(j);
          //console.log("" + i + j);
          //console.log(document.getElementById(11));
          //let item = document.getElementById("" + i + j);
          //console.log(item);
          //console.log(item.item(0));
          //item[0].style.backgroundColor = "red";
        } */
/* if (i == Events[index].resource) {
                console.log(document.getElementsByClassName("" + i + item));
              } */
//console.log("" + i + item);
/* let ele = document.getElementById("" + i + item); */
//console.log(document.getElementById("" + i + item));
//console.log(ele == undefined);
/* if (typeof ele === "undefined") {
                console.log("object");
              } else {
                //console.log(document.getElementById("" + i + item));
                console.log(ele);
                ele.style.backgroundColor = "red";
              } */
/* console.log(
                document.getElementsByClassName("SquareContainerRowItem")
              ); */
/* console.log(index);
              console.log(Events[index]);
              console.log(typeof Events[index] === "undefined"); */
/*  if (typeof Events[index] !== "undefined") {
              console.log(index);
              console.log(Events[index]);
              console.log(typeof Events[index] === "undefined");
            } */
//console.log(i._targetInst.key);
//console.log(i);  //setDayCount(item);
//this.state.EventResource_Arr[0]
/* className={`SquareContainerRow ${
            this.state.EventResource_Arr.indexOf(i) == "-1" ? "" : "event"
          }`} */
/* return (


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
//for (let i = 0; i < SquareContainerRow.length; i++) {
//if (this.state.EventResource_Arr.includes(i)) {
/* SquareContainerRow[i].style.backgroundColor = "";
        SquareContainerRow[i].style.color = "black"; */

//Events.map((item) => {
// var children = SquareContainerRow[i].childNodes;
//console.log(children[item.start]);
/* console.log(item.start);
          console.log(children[0]); */

//console.log(typeof children[0] === "undefined");
/*  if (
            typeof children[item.start] !== "undefined" ||
            i >= parseInt(item.start) ||
            i <= parseInt(item.end)
          ) {
            //children[item.start].style.backgroundColor = "yellow";
            console.log(typeof item.start);
            //console.log(document.getElementById(`${item.star}`));
            console.log(children[parseInt(item.start)]);
            //console.log("false");
            children[parseInt(item.start)].style.backgroundColor = "yellow";
          } */
//});
//console.log(children[0]);
/* for (let j = 0; j < this.state.DayCount; j++) {
          //console.log(children[j]);
          Events.map((item) => {
            console.log(item);
            if (j <= parseInt(item.end) || j >= parseInt(item.start)) {
              console.log(j);
            }
          });
        } */
//}
//}
/*     console.log(ele_x);
          console.log(typeof ele_x); */
//console.log(ele_x[0] === undefined);
/* if (!ele_x[0] == "undefined") {
            //console.log(ele_x[0]);
            //ele_x[0].style.display = "none";
          } */
//console.log(typeof ele_x);
//ele_x[0].style.backgroundColor = "red";
//console.log("" + i + item.resource);

//let SquareContainerRow = row;
/*
      let SquareContainerRow =
      document.getElementsByClassName("SquareContainerRow");
      */
/*      if (this.state.EventResource_Arr.indexOf(i) == "-1") {
      } else {
      
        console.log(row[i].type);
        Events.map((item) => {
          let id_start = "" + i + parseInt(item.start);
          let id_end = "" + i + parseInt(item.end);
          let ele_x = document.getElementById(id_start);
          let ele_x_end = document.getElementById(id_end);
          if (ele_x == null) {
            console.log("ok");
          } else {
            console.log(ele_x);
            console.log(typeof ele_x);
          }
        });
      } */
