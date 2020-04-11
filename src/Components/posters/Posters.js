import React, { Component } from "react";
import { Consumer } from "../../context";
import Welcome from "../layout/Welcome";

class Posters extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          console.log(value);
          const { posterList } = value;
          if (posterList.length === 0 || posterList === undefined) {
            return (
              <React.Fragment>
                <Welcome />
              </React.Fragment>
            );
          } else {
          }
        }}
      </Consumer>
    );
  }
}

export default Posters;
