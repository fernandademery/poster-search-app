import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    posterList: [],
    limit: 9,
    offset: 0,
    total: 0,
    query: "",
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
