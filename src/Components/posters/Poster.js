import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlusSquare } from "react-feather";

function Poster(props) {
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

            <Link to={`/poster/${props.poster.id}`}>
              <Button variant="secondary" block style={{ marginTop: "10px" }}>
                <PlusSquare size={18} /> Click for details
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Poster;
