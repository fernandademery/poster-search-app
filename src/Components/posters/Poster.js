import React from "react";
import { Col, Card } from "react-bootstrap";
import { Consumer } from "../../context";

function Poster(props) {
  console.log(props);
  return (
    <Col md={4}>
      <Card className="mb-4 shadow">
        <Card.Img variant="top" src={props.poster.thumb_url} />
        <Card.Body>
          <Card.Title>{props.poster.title}</Card.Title>
          <Card.Text>
            {props.poster.author_names.map((author) => (
              <h6 key={author} style={{ color: "#636066" }}>
                Author: {author}
              </h6>
            ))}
            <p style={{ color: "#636066" }}>Event: {props.eventName[0].name}</p>

            <span style={{ color: "#636066", fontStyle: "italic" }}>
              Keywords: {props.poster.keywords.join(", ")}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Poster;
