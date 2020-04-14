import React, { Component } from "react";
import { Context, Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import { Row, Button, Col } from "react-bootstrap";
import Poster from "./Poster";
import { ChevronRight, ChevronLeft, Search } from "react-feather";
import { Link, withRouter } from "react-router-dom";

class Posters extends Component {
  static contextType = Context;

  componentDidMount() {
    this.context.getPosters(this.props.match.params.query);
  }

  componentDidUpdate(prevProps) {
    const query = this.props.match.params.query;
    if (prevProps.match.params.query !== query) {
      this.context.getPosters(query, 9, 0);
    }
  }

  render() {
    return (
      <Consumer>
        {(items) => {
          const query = this.props.match.params.query;
          console.log(items);

          if (items.items.length === 0 || items === undefined) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h4>
                  We found {items.total} posters about {query}
                </h4>

                <Row>
                  {items.items.map((item) => (
                    <Poster
                      poster={item}
                      key={item.id}
                      eventName={this.context.events.filter(
                        (event) => event.id === item.event
                      )}
                    />
                  ))}
                </Row>

                <Row className="d-flex justify-content-between">
                  <Col>
                    {items.offset !== 0 && (
                      <Button
                        onClick={items.getPrevPage}
                        style={{ backgroundColor: "#555555" }}
                      >
                        <ChevronLeft size={24} />
                        Prev Page
                      </Button>
                    )}
                  </Col>

                  <Col>
                    <Link to="/">
                      <Button style={{ backgroundColor: "#555555" }}>
                        <Search size={24} />
                        New Search
                      </Button>
                    </Link>
                  </Col>

                  <Col>
                    <Button
                      onClick={items.getNextPage}
                      style={{ backgroundColor: "#555555" }}
                    >
                      <ChevronRight size={24} />
                      Next Page
                    </Button>
                  </Col>
                </Row>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default withRouter(Posters);
