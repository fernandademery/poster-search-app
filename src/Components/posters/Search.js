import React, { Component } from "react";
import { Consumer } from "../../context";
import Card from "react-bootstrap/Card";
import { Bookmark } from "react-feather";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findPosters = (e) => {
    e.preventDefault();

    this.props.history.push(`/search/${this.state.query}`);
  };

  render() {
    return (
      <Consumer>
        {(items) => {
          return (
            <Card>
              <Card.Body className="mb-4 p-4">
                <h1
                  className="display-4 text-center"
                  style={{ fontWeight: "500" }}
                >
                  <Bookmark size={48} /> Search for a Poster
                </h1>
                <Form onSubmit={this.findPosters}>
                  <Form.Group>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Type your topic of interest here"
                      name="query"
                      value={this.state.query}
                      onChange={this.onChange}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    size="lg"
                    block
                    className="mb-3"
                    type="submit"
                    style={{ backgroundColor: "#555555" }}
                  >
                    Get Posters
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(Search);
