import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CarInfo.css";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const CarInfo = (props) => {
  const [formValues, setFormValues] = useState({
    BrandName: "",
    ModelName: "",
    year: "",
    mileage: "",
    condition: "",
    price: "",
    description: "",
    base64: [0],
    owner: "",
  });
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/car-info/" + id)
      .then((res) => {
        const {
          BrandName,
          ModelName,
          year,
          mileage,
          condition,
          price,
          description,
          base64,
          owner,
        } = res.data;
        setFormValues((prevValues) => ({
          ...prevValues,
          BrandName,
          ModelName,
          year,
          mileage,
          condition,
          price,
          description,
          base64,
          image: null,
          owner,
        }));
        convertToImage(base64).then((image) => {
          setFormValues((prevValues) => ({ ...prevValues, image }));
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cars/user-email?email=${formValues.owner}`)
      .then((res) => {
        const { firstName, lastName, phone, email } = res.data;
        setUsers((values) => ({
          ...values,
          firstName,
          lastName,
          phone,
          email,
        }));
      })
      .catch((err) => console.log(err));
  });

  const convertToImage = (base64String) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = base64String;
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <div
        className="car_block"
        style={{
          borderRadius: "2em",
          backgroundColor: "#415A77",
          zIndex: 2,
          backgroundImage: `url(${formValues.image && formValues.image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="contacs"
          style={{ borderRadius: "2em", backgroundColor: "#415A77", zIndex: 1 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/3128/3128526.png"
            style={{ marginLeft: "15%" }}
          ></img>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "center", marginLeft: "3%", marginTop: "3%" }}
          >
            {users.firstName} {users.lastName}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "justify", marginLeft: "3%" }}
          >
            Phone:{users.phone}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "justify", marginLeft: "3%" }}
          >
            Email:{users.email}
          </Typography>
        </div>
        <div
          className="car_block2"
          style={{ borderRadius: "2em", backgroundColor: "#415A77", zIndex: 0 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            style={{ textAlign: "center", marginTop: "2%" }}
          >
            {formValues.BrandName} {formValues.ModelName}
          </Typography>
          <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
            {" "}
            Description
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "justify" }}
          >
            {" "}
            {formValues.description}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "justify" }}
          >
            {" "}
            Condition : {formValues.condition} Year : {formValues.year} Mileage
            : {formValues.mileage}{" "}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
