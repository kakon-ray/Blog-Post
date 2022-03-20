import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Header from "../../component/Header";
import database from "../../firebase";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    database.child("user").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
  }, []);

  var dataId = [];
  for (let i in data) {
    dataId.push(i);
    // console.log(data[i].name);
  }
  dataId.reverse();
  return (
    <div className="container">
      <div className="row mt-4">
        {dataId.map((id) => {
          return (
            <div className="col-md-4 my-2">
              <React.Fragment key={id}></React.Fragment>
              <Card style={{ minHeight: "15rem" }}>
                <Card.Body className="text-center">
                  <Card.Title className="">{data[id].name}</Card.Title>
                  <Card.Text>{data[id].email}</Card.Text>
                  <Card.Text>{data[id].message}</Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-center mb-3">
                  <Button variant="primary" className="mx-2">
                    View
                  </Button>
                  <Button variant="secondary" className="mx-2">
                    Edit
                  </Button>
                  <Button variant="danger" className="mx-2">
                    Delete
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
