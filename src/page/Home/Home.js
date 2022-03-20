import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Header from "../../component/Header";
import database from "../../firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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

  const onDelete = (id) => {
    if (window.confirm("Are You Sure Delete This Post")) {
      database.child(`user/${id}`).remove((error) => {
        if (error) {
          toast.error("Some Problem Do not Delete at this time");
        } else {
          toast.success("Delete Successfully");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row mt-4">
        {dataId.map((id) => {
          return (
            <div className="col-md-4 my-2">
              <React.Fragment key={id}></React.Fragment>
              <Card style={{ height: "15rem" }}>
                <Card.Body className="text-center">
                  <Card.Title className="">{data[id].name}</Card.Title>
                  <Card.Text>{data[id].email}</Card.Text>
                  <Card.Text>
                    {data[id].message.split("").length < 100
                      ? data[id].message
                      : data[id].message.split("").slice(0, 100).join("") +
                        "........."}
                    {/* {console.log()} */}
                  </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-center mb-3">
                  <Link to={`/view/${id}`}>
                    <Button variant="primary" className="mx-2">
                      View
                    </Button>
                  </Link>
                  <Link to={`/edit/${id}`}>
                    <Button variant="secondary" className="mx-2">
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => onDelete(id)}
                  >
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
