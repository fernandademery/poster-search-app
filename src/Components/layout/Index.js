import React from "react";
import Welcome from "../layout/Welcome";
import Search from "../posters/Search";

function Index() {
  return (
    <React.Fragment>
      <Search />
      <Welcome />
    </React.Fragment>
  );
}

export default Index;
