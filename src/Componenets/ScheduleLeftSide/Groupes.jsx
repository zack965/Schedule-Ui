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
  };
  HandleZipLocalStorageState = () => {
    this.setState({ countGroupeItem: this.state.countGroupeItem - 2 });
    this.context.setHeight(this.state.countGroupeItem - 2);
  };
  HandleUnZipLocalStorageState = () => {
    this.setState({ countGroupeItem: this.state.countGroupeItem + 2 });
    this.context.setHeight(this.state.countGroupeItem + 2);
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
    const { height, setHeight, ItemIdGroupe } = this.context;
    console.log(ItemIdGroupe);

    let GlobalClass = document.getElementsByClassName("GlobalClass");
    console.log(GlobalClass);
    console.log(GlobalClass[ItemIdGroupe]);
    console.log(typeof GlobalClass[ItemIdGroupe]);

    for (let i = 0; i < GlobalClass.length; i++) {
      GlobalClass[i].style.backgroundColor = "#dfe4ea";
      GlobalClass[i].style.color = "black";
    }
    /* GlobalClass[ItemIdGroupe].style.backgroundColor = "#8395a7";
    GlobalClass[ItemIdGroupe].style.color = "white"; */
    if (typeof GlobalClass[ItemIdGroupe] == "undefined") {
      /* GlobalClass[ItemIdGroupe].style.backgroundColor = "#8395a7";
      GlobalClass[ItemIdGroupe].style.color = "white"; */
      console.log("undefined");
    } else {
      GlobalClass[ItemIdGroupe].style.backgroundColor = "#8395a7";
      GlobalClass[ItemIdGroupe].style.color = "white";
      console.log("not undefined");
    }
    return (
      <div className="GroupesContainer">
        {GroupesData.map((item, index) => {
          /* console.log(ItemIdGroupe == index);
          console.log(index); */
          if (ItemIdGroupe == 0) {
            return (
              <div className="conTainerGroupeItemGroupeData" key={item.id}>
                <p className="GroupeName GlobalClass">
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
                        key={item.index}
                        className={`ResourceConiatner GlobalClass`}
                      >
                        <p>{item.name}</p>
                      </div>
                    ));
                  }
                })()}
              </div>
            );
          } else {
            return (
              <div className="conTainerGroupeItemGroupeData" key={item.id}>
                <p className="GroupeName GlobalClass">
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
                        key={item.index}
                        className={`ResourceConiatner GlobalClass`}
                      >
                        <p>{item.name}</p>
                      </div>
                    ));
                  }
                })()}
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default Groupes;
