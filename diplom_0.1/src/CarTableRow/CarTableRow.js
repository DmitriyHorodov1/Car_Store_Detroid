import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CarTableRow.css";
import Typography from "@mui/material/Typography";
const CarTableRow = (props) => {
  const {
    _id,
    BrandName,
    ModelName,
    year,
    mileage,
    condition,
    price,
    description,
    base64,
  } = props.obj;
  const [email, setEmail] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const { isUserCar } = props;
 
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (loggedInEmail) {
      setEmail(loggedInEmail);
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/users")
      .then((response) => {
        setUsers(response.data);
        const adminUser = response.data.find(
          (user) => user.email === email && user.role === "Admin"
        );
        if (adminUser) {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [email]);

  const deleteCar = () => {
    axios
      .delete(`http://localhost:4000/cars/delete-car/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Car successfully deleted");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  const convertToImage = async (base64String) => {
    try {
      const image = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = base64String;
      });
      setImageSrc(image.src);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (base64) {
      convertToImage(base64);
    }
  }, [base64]);

  return (
    <>
      
      <div class="cartoshka">
        <div class="wrapper">
          <div
            class="banner-image"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
          <h1>
            {BrandName} {ModelName}
          </h1>
          <p>
            Year {year} <br />
            Price {price} Miles {mileage}
          </p>
        </div>
        <div class="button-wrapper">
          <Link to={`/car-info/${_id}`} class="btn outline">
            DETAILS
          </Link>
          {isAdmin || isUserCar ? (
            <>
              <Button variant="danger" onClick={deleteCar}>
                Delete
              </Button>
              <Link
                to={`/update-car/${_id}`}
                className="btn fill"
                style={{ marginTop: "2%" }}
              >
                Edit
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CarTableRow;
