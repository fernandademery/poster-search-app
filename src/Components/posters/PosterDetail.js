import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Col, Card, Button, Row } from "react-bootstrap";
import "./styles.css";
import { withRouter, Link } from "react-router-dom";
import { ChevronLeft, Search } from "react-feather";

class PosterDetail extends Component {
  state = {
    poster: {},
    event: {},
    users: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://staging-ng.morressier.com/events_manager/v2/posters/${this.props.match.params.posterId}`
      )
      .then((res) => {
        this.setState({
          poster: res.data.poster,
          event: res.data.event,
          users: res.data.users,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { poster, event, users } = this.state;

    if (
      poster === undefined ||
      event === undefined ||
      users === undefined ||
      Object.keys(poster).length === 0 ||
      Object.keys(event).length === 0 ||
      users.length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Row className="d-flex justify-content-between">
            <Col>
              <Button
                onClick={this.props.history.goBack}
                style={{ backgroundColor: "#555555" }}
              >
                <ChevronLeft size={24} />
                Go Back
              </Button>
            </Col>
            <Col className="search-button">
              <Link to="/">
                <Button style={{ backgroundColor: "#555555" }}>
                  <Search size={24} /> New Search
                </Button>
              </Link>
            </Col>
          </Row>
          <h1 style={{ textAlign: "center" }}>Poster details</h1>
          <Col md={{ span: 10, offset: 1 }}>
            <Card className="mb-4 shadow mt-5">
              <Card.Img
                variant="top"
                src={poster.thumb_url_large}
                alt="Poster img"
              />
              <Card.Body>
                <Card.Title className="poster-title">{poster.title}</Card.Title>

                <Card.Subtitle className="poster-subtitle poster-title">
                  Author:
                  {users.map((user) => (
                    <span> {user.full_name}</span>
                  ))}
                </Card.Subtitle>

                <Card.Subtitle
                  className="poster-subtitle"
                  style={{ marginTop: "10px", fontSize: "24px" }}
                >
                  Event: {event.name}
                </Card.Subtitle>

                <Card.Text className="keywords">
                  Keywords: {poster.keywords.join(", ")}
                </Card.Text>
                <Card.Text>{poster.paper_abstract}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(PosterDetail);
