import "./UserCarList.css";
import CarTableRow from "../CarTableRow/CarTableRow";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserCarList = (props) => {
  const [cars, setCars] = useState([]);
  const [email, setEmail] = useState("");
  const { emailadmin } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/")
      .then(({ data }) => {
        setCars(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (loggedInEmail) {
      setEmail(loggedInEmail);
    }
  }, []);

  const DataTable = () => {
    const filteredCars = cars.filter((car) => {
      if (emailadmin && email) {
        // If both emailadmin and email are defined, filter by either
        return car.owner === email || car.owner === emailadmin;
      } else if (emailadmin) {
        // If only emailadmin is defined, filter by it
        return car.owner === emailadmin;
      } else if (email) {
        // If only email is defined, filter by it
        return car.owner === email;
      } 
    });

    return filteredCars.map((res, i) => {
      return <CarTableRow obj={res} key={i} isUserCar={true} />;
    });
  };

  return (
    <>
      <div className="table-spacing">{DataTable()}</div>
    </>
  );
};

export default UserCarList;
