import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeCard({ name, email, message, id, onDelete }) {
  return (
    <>
      <Card style={{ height: "15rem" }}>
        <Card.Body className="text-center">
          <Card.Title className="">{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Card.Text>
            {message.split("").length < 100
              ? message
              : message.split("").slice(0, 100).join("") + "........."}
            {/* {console.log()} */}
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-center mb-3">
          <Link to={`/view/${id}`}>
            <Button variant="primary" className="mx-2">
              View Post
            </Button>
          </Link>
          <Link to={`/edit/${id}`}>
            <Button variant="secondary" className="mx-2">
              Update Post
            </Button>
          </Link>

          <Button variant="danger" className="mx-2" onClick={onDelete}>
            Delete Post
          </Button>
        </div>
      </Card>
    </>
  );
}
