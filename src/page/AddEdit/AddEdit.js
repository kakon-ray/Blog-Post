import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../../component/Header";
import { toast } from "react-toastify";
import database from "../../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

const inputValue = {
  name: "",
  email: "",
  message: "",
};
export default function AddEdit() {
  const [user, setUser] = useState(inputValue);
  // this useState is Edit work
  const [data, setData] = useState({});

  const { name, email, message } = user;

  const history = useHistory();

  // start handle Edit work
  // this code get data firebase database
  const { id } = useParams();
  useEffect(() => {
    database.child("user").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
  }, [id]);

  // this code save edit data
  // যখন কম্পোনেন্ট লোড হবে তখন setUser এর মধ্যে setUser এর  user লোড না হয়ে setData এর data লোড হবে

  useEffect(() => {
    if (id) {
      setUser({ ...data[id] });
    } else {
      setUser({ ...inputValue });
    }
    // if user navigate other menu about view then dose not update value
    return () => {
      setUser({ ...inputValue });
    };
  }, [id, data]);

  // this code handle is onchange input value

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // this code save form value and push firebase database
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please all Input fild Filap");
    } else {
      database.child("user").push(user, (error) => {
        if (error) {
          toast.error("Submit not Successfull");
        } else {
          toast.success("Your Information Successfully Saved");
        }
      });
      setTimeout(() => history.push("/"), 2000);
    }
    // console.log(name, email, message);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "50%" }}
        className="mx-auto"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={name || ""}
            placeholder="Enter Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type Your Message</Form.Label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            type="message"
            placeholder="Enter Your Message"
            name="message"
            value={message || ""}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
