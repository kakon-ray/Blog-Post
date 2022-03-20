import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../component/Header";
import database from "../../firebase";

const inputValue = {
  name: "",
  email: "",
  message: "",
};

export default function View() {
  const [data, setData] = useState({});
  const [user, setUser] = useState(inputValue);

  const { id } = useParams();

  //this code work get data firebase database
  useEffect(() => {
    database
      .child(`user/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  // console.log(user);

  return (
    <div>
      <Card style={{ width: "30rem" }} className="mx-auto mt-4">
        <Card.Body className="text-center">
          <Card.Title className="">{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.message}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
