import React from "react";
import NavBar from "./Components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Index from "./Components/layout/Index";
import { Provider } from "./context";
import Posters from "./Components/posters/Posters";
import PosterDetail from "./Components/posters/PosterDetail";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/search/:query" component={Posters} />
              <Route path="/poster/:posterId" component={PosterDetail} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
