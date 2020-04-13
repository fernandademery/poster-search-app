import React, { Component } from "react";
import axios from "axios";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    items: [],
    limit: 9,
    offset: 0,
    total: 0,
    query: "",
    event: "",
  };

  getPosters = async (
    query,
    limit = this.state.limit,
    offset = this.state.offset
  ) => {
    this.setState({
      query,
      limit,
      offset,
    });
    const { data } = await axios.get(
      `http://cors-anywhere.herokuapp.com/https://staging-ng.morressier.com/events_manager/v3/posters/search?query=${query}&limit=${limit}&offset=${offset}`
    );
    this.setState({
      items: data.posters,
      offset: offset,
      total: data.collection.total,
      events: data.events,
    });
  };

  getNextPage = () => {
    const { query, limit, offset } = this.state;
    this.getPosters(query, limit, offset + 9);
  };

  getPrevPage = () => {
    const { query, limit, offset } = this.state;
    this.getPosters(query, limit, offset - 9);
  };

  render() {
    return (
      <Context.Provider
        value={{
          items: this.state.items,
          getPosters: this.getPosters,
          total: this.state.total,
          offset: this.state.offset,
          getNextPage: this.getNextPage,
          getPrevPage: this.getPrevPage,
          events: this.state.events,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
