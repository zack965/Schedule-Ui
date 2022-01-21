import React, { Component } from "react";
import "../../Styles/Groupes.css";
import { GroupesData } from "../../Data/GroupesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
class Groupes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_down: false,
      is_down_data: [],
      groupe_id_arr: [],
    };
  }

  componentDidMount() {
    //console.log(GroupesData[0].children.length);
    localStorage.setItem(
      "square_height",
      GroupesData.length * GroupesData[0].children.length + 2
    );
  }
  ToggleIsDownState = (id) => {
    if (this.state.is_down == false) {
      this.setState({ is_down: true });
      if (this.state.groupe_id_arr.indexOf(id) == "-1") {
        this.state.groupe_id_arr.push(id);
        /* this.setState({
          groupe_id_arr: [...this.state.groupe_id_arr, id],
        }); */
      }
      console.log(this.state.groupe_id_arr);
    } else {
      this.setState({ is_down: false });
      let index = this.state.groupe_id_arr.indexOf(id);
      this.state.groupe_id_arr.splice(index, 1);
    }
  };
  render() {
    for (let index = 0; index < GroupesData[0].children.length; index++) {
      this.state.is_down_data.push(0);
    }
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

            {/*  {this.state.groupe_id_arr.indexOf(item.id) == "-1" ? (
              <p>false</p>
            ) : (
              <p>true</p>
            )} */}
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
              } /* else {
                return <p>nada</p>;
              } */
            })()}
            {/*   {() => {
              if (this.state.groupe_id_arr.indexOf(item.id) == "-1") {
                return GroupesData[index].children.map((item, index) => (
                  <div
                    /* className="ResourceConiatner" 
                    key={item.index}
                    className={`ResourceConiatner`}
                  >
                    <p>{item.name}</p>
                  </div>
                ));
              } else {
                return <p>nada</p>;
              }
            }} */}
          </div>
        ))}
      </div>
    );
  }
}
export default Groupes;
/* {this.state.groupe_id_arr.indexOf(item.id) == "-1" ? (
              <p>false</p>
            ) : (
              <p>true</p>
            )}
  {GroupesData[index].children.map((item, index) => (
              <div
                 className="ResourceConiatner" 
                key={item.index}
                className={`ResourceConiatner`}
              >
                <p>{item.name}</p>
              </div>
            ))}
             {GroupesData[index].children.map((item, index) => (
              <div
className="ResourceConiatner" 
                key={item.index}
                className={`ResourceConiatner`}
              >
                <p>{item.name}</p>
              </div>
            ))}
            */
