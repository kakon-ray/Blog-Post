import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ViewCard({ userName, userEmail, userMessage }) {
  return (
    <>
      <Card style={{ width: "30rem" }} className="mx-auto my-4">
        <Card.Body className="text-center">
          <Card.Title className="text-info" style={{ fontSize: "30px" }}>
            {userName}
          </Card.Title>
          <Card.Text>{userEmail}</Card.Text>
          <Card.Text>{userMessage}</Card.Text>
        </Card.Body>
        <Link to={"/"} className="mx-auto mb-3">
          <Button variant="secondary" className="mx-2">
            Back To Home
          </Button>
        </Link>
      </Card>
    </>
  );
}
