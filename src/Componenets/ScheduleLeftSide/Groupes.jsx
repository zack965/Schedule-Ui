import React, { Component } from "react";
import "../../Styles/Groupes.css";
import { GroupesData } from "../../Data/GroupesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HeightContext from "../../Context/SqueresHeightContext";
class Groupes extends Component {
  static contextType = HeightContext;

  constructor(props) {
    super(props);

    this.state = {
      is_down: false,
      is_down_data: [],
      groupe_id_arr: [],
      countGroupeItem:
        GroupesData.length +
        GroupesData[0].children.length * GroupesData.length,
      x: "",
    };
  }

  componentDidMount() {
    //this.setState({ x: this.context.height });
    //console.log(this.state.x);
    //console.log(this.context.height);
    //alert(`${this.props.SquareHeight_x}`);
    //this.props.parentCallback(55);
    //alert(`${this.props.SquareHeight_x}`);
    //console.log("-----" + this.props.SquareHeight_x);
    //console.log(GroupesData[0].children.length);
    //alert(`${HeightContext}`);
    //localStorage.setItem("square_height", this.state.countGroupeItem);
    //console.log(localStorage.getItem("square_height"));
    //this.props.parentCallback(this.state.countGroupeItem);
  }
  HandleShowHideItemsGroup = (id) => {
    let groupe_id_arr_x = [...this.state.groupe_id_arr];
    if (this.state.groupe_id_arr.indexOf(id) == "-1") {
      groupe_id_arr_x.push(id);
      this.setState({ groupe_id_arr: groupe_id_arr_x });
      //console.log(this.state.groupe_id_arr);
      this.HandleZipLocalStorageState();
    } else {
      let groupe_id_arr_x = [...this.state.groupe_id_arr];
      let index = groupe_id_arr_x.indexOf(id);
      groupe_id_arr_x.splice(index, 1);
      this.setState({ groupe_id_arr: groupe_id_arr_x });
      //console.log(this.state.groupe_id_arr);
      this.HandleUnZipLocalStorageState();
    }

    //console.log(this.state.countGroupeItem);
    //this.props.parentCallback(this.state.countGroupeItem);
    /* this.props.parentCallback(this.state.countGroupeItem);
    console.log("-----" + this.props.SquareHeight_x); */
  };
  HandleZipLocalStorageState = () => {
    this.setState({ countGroupeItem: this.state.countGroupeItem - 2 });
    //localStorage.setItem("square_height", this.state.countGroupeItem);
    this.context.setHeight(this.state.countGroupeItem - 2);
    //console.log(this.context.height);

    //console.log("-----" + this.props.SquareHeight_x);
    //console.log(this.state.countGroupeItem);

    //console.log(localStorage.getItem("square_height"));
  };
  HandleUnZipLocalStorageState = () => {
    this.setState({ countGroupeItem: this.state.countGroupeItem + 2 });
    //localStorage.setItem("square_height", this.state.countGroupeItem);
    this.context.setHeight(this.state.countGroupeItem + 2);
    //console.log(this.context.height);
  };
  ToggleIsDownState = (id) => {
    if (this.state.is_down == false) {
      this.setState({ is_down: true });
      this.HandleShowHideItemsGroup(id);
    } else {
      this.setState({ is_down: false });
      this.HandleShowHideItemsGroup(id);
    }
  };

  render() {
    const { height, setHeight } = this.context;
    return (
      <div className="GroupesContainer">
        {GroupesData.map((item, index) => (
          <div className="conTainerGroupeItemGroupeData" key={item.id}>
            <p className="GroupeName">
              {this.state.is_down == false ? (
                <FontAwesomeIcon
                  onClick={() => {
                    this.ToggleIsDownState(item.id);
                  }}
                  icon={faAngleRight}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => {
                    this.ToggleIsDownState(item.id);
                  }}
                  icon={faAngleDown}
                />
              )}
              {item.name}
            </p>
            {(() => {
              if (this.state.groupe_id_arr.indexOf(item.id) == "-1") {
                return GroupesData[index].children.map((item, index) => (
                  <div
                    /* className="ResourceConiatner" */
                    key={item.index}
                    className={`ResourceConiatner`}
                  >
                    <p>{item.name}</p>
                  </div>
                ));
              }
            })()}
          </div>
        ))}
      </div>
    );
  }
}
export default Groupes;
