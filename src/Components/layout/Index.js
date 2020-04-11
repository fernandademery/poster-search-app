import React from "react";
import Posters from "../posters/Posters";
import Search from "../posters/Search";

function Index() {
  return (
    <React.Fragment>
      <Search />
      <Posters />
    </React.Fragment>
  );
}

export default Index;
