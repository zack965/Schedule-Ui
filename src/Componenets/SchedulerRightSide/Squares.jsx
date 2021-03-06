import moment from "moment";
import React, { Component } from "react";
import { Children } from "react/cjs/react.production.min";
import HeightContext from "../../Context/SqueresHeightContext";
import { Events } from "../../Data/EventsData";
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
      point_start: "",
      point_end: "",
      EventResource_Arr: [],
      PontStartObjectEvent: "",
      name_event: "",
    };
  }
  HandleChangename_event = (e) => {
    this.setState({ name_event: e.target.value });
  };
  HandleDateReformetInEvents = () => {
    let EventResource_Arr_x = [...this.state.EventResource_Arr];
    //const EventResource_Arr_x = new Set();
    Events.map((item) => {
      item.start = moment(item.start).format("DD");
      item.end = moment(item.end).format("DD");
      if (item.resource == "R1") {
        item.resource = 1;
      } else if (item.resource == "R2") {
        item.resource = 2;
      } else if (item.resource == "R3") {
        item.resource = 4;
      } else if (item.resource == "R4") {
        item.resource = 5;
      }

      if (this.state.EventResource_Arr.indexOf(item.resource) == "-1") {
        this.setState({
          EventResource_Arr: this.state.EventResource_Arr.concat(item.resource),
        });
      }
      //console.log(item);
    });
    //this.FilterSquareContainerRow();
  };
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

  CreateEvent = (start_day, end_day, groupe_ndex, text_event) => {
    let len_events = Events.length;
    const start_d = new Date();
    const end_d = new Date();
    start_d.setDate(start_day);
    end_d.setDate(end_day);
    let new_event = {
      id: len_events,
      resource: groupe_ndex,
      start: moment(start_d).format("DD"),
      end: moment(end_d).format("DD"),
      text: text_event,
    };
    console.log(new_event);
    Events.push(new_event);
    console.log(Events);
    this.hideModal();
  };
  componentDidMount() {
    console.log("mounted");
    this.fillSquareHeight_arr();
    this.fillDayCountArr();
    this.HandleDateReformetInEvents();
    //this.CreateEvent(4, 15);
    /* this.FilterSquareContainerRow(); */
  }
  /* runCallback = (cb) => {
    return cb();
  }; */
  FilterSquareContainerRow = () => {
    let SquareContainerRow =
      document.getElementsByClassName("SquareContainerRow");
    //console.log(SquareContainerRow);
    for (let i = 0; i < SquareContainerRow.length; i++) {
      Events.map((item) => {
        if (item.resource == i) {
          console.log("matched");
          let id_start = "" + i + parseInt(item.start); // 4
          let id_end = "" + i + parseInt(item.end); // 8
          let ele_x = document.getElementById(id_start);
          let ele_x_end = document.getElementById(id_end);
          if (ele_x == null) {
          } else {
            let length = id_end - id_start;
            for (let k = 1; k <= length; k++) {
              //console.log("" + id_end - k);
              //console.log(k);
              if (document.getElementById("" + id_end - k) != null) {
                let ele_ment = document.getElementById("" + id_end - k);
                ele_ment.style.backgroundColor = "#dcdde1";
                ele_ment.style.border = "none";
                ele_ment.style.borderBottom = "1px solid black";
                ele_ment.style.borderTop = "4px solid #4834d4";
                ele_ment.style.marginLeft = "16px";
                ele_ment.style.marginRight = "16px";

                if (k == length) {
                  ele_ment.style.borderLeft = "1px solid black";
                  ele_ment.getElementsByTagName("p")[0].innerHTML = item.text;
                  ele_ment.style.width = 32 * (length - 1) + "px";
                } else {
                  ele_ment.remove();
                }
              }
            }
          }
        }
      });
    }
  };

  PrintGroupes = () => {
    const { height, setDayCount, setItemIdGroupe, ItemIdGroupe } = this.context;
    const row = [];
    //console.log("-------------");
    console.log("executed");

    for (let i = 0; i < height; i++) {
      //console.log(i);

      row.push(
        <div
          className="SquareContainerRow"
          key={i}
          id={i}
          onMouseEnter={() => {
            setItemIdGroupe(i);
          }}
        >
          {this.state.DayCountArr.map((item, index) => {
            if (this.state.specialdays.indexOf(item) == -1) {
              return (
                <div
                  className={"SquareContainerRowItem" + " " + i + item}
                  key={item}
                  id={"" + i + item}
                  onMouseEnter={() => {
                    setDayCount(item);
                    //setItemIdGroupe(i);
                  }}
                  onMouseDown={() => {
                    this.setState({ point_start: item });
                    this.setState({ PontStartObjectEvent: ItemIdGroupe });
                  }}
                  onMouseUp={() => {
                    this.setState({ point_end: item });
                    /* this.CreateEvent(
                      this.state.point_start,
                      item,
                      ItemIdGroupe
                    ); */
                    console.log(document.getElementById("1001"));
                    document.getElementById("1001").style.display = "block";
                  }}
                >
                  <p></p>
                </div>
              );
            } else if (this.state.specialdays.indexOf(item) !== -1) {
              return (
                <div
                  className={
                    "SquareContainerRowItem special_day" + " " + i + item
                  }
                  key={item}
                  id={"" + i + item}
                  onMouseEnter={() => {
                    setDayCount(item);
                  }}
                  onMouseDown={() => {
                    this.setState({ point_start: item });
                    this.setState({ PontStartObjectEvent: ItemIdGroupe });
                  }}
                  onMouseUp={() => {
                    this.setState({ point_end: item });

                    console.log(document.getElementById("1001"));
                    document.getElementById("1001").style.display = "block";
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
    //this.FilterSquareContainerRow();
    //console.log("-------------");
    return row;
  };
  /* HandleEventPrint = (i_index) => {
    if (!this.state.EventResource_Arr.indexOf(i_index) == "-1") {
      let SquareContainerRow =
        document.getElementsByClassName("SquareContainerRow");
      //console.log(SquareContainerRow[i_index]);
    }
  }; */
  hideModal = () => {
    document.getElementById("1001").style.display = "none";
  };
  render() {
    //this.FilterSquareContainerRow();
    const { height, DayCount, setDayCount, setItemIdGroupe, ItemIdGroupe } =
      this.context;
    //this.FilterSquareContainerRow();
    return (
      <div className="SquareContainer">
        {/*   {this.FilterSquareContainerRow()} */}
        <div>
          {this.PrintGroupes()}
          {this.FilterSquareContainerRow()}
        </div>

        <p> start is :{this.state.point_start}</p>
        <p> end is : {this.state.point_end}</p>
        <p> RowIndex is : {ItemIdGroupe}</p>
        <p> PontStartObjectEvent is : {this.state.PontStartObjectEvent}</p>
        <div className="modal" id="1001">
          <input
            type="text"
            name=""
            value={this.state.name_event}
            onChange={this.HandleChangename_event}
            placeholder="Event Name"
          />
          <br />
          <button
            onClick={() => {
              this.CreateEvent(
                this.state.point_start,
                this.state.point_end,
                this.state.PontStartObjectEvent,
                this.state.name_event
              );
            }}
          >
            create event
          </button>
          <br />
          <button
            onClick={() => {
              this.hideModal();
            }}
          >
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Squares;
