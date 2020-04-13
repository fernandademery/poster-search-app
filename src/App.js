import React from "react";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Index from "./Components/layout/Index";
import { Provider } from "./context";
import Posters from "./Components/posters/Posters";

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
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
