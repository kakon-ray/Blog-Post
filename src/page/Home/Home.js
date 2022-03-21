import React, { useEffect, useState } from "react";
import database from "../../firebase";
import { toast } from "react-toastify";
import HomeCard from "./HomeCard";

export default function Home() {
  const [data, setData] = useState({});

  //this code work get data firebase database
  useEffect(() => {
    database.child("user").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
  }, []);

  // this is a temprory array using store key
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
    <div className="container-fluid">
      <div className="row mt-4">
        {dataId.map((id) => {
          return (
            <div className="col-md-4 my-2">
              <React.Fragment key={id}></React.Fragment>
              <HomeCard
                name={data[id].name}
                email={data[id].email}
                message={data[id].message}
                id={id}
                onDelete={() => onDelete(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
