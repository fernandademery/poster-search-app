import React from "react";
import Welcome from "../layout/Welcome";
import Search from "../posters/Search";
import Posters from "../posters/Posters";

function Index() {
  return (
    <React.Fragment>
      <Search />
      <Welcome />
    </React.Fragment>
  );
}

export default Index;
