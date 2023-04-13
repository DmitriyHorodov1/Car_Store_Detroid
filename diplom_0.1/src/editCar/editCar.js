// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import CarForm from "../CarForm/CarForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// EditCar Component

const EditCar = (props) => {
  const [formValues, setFormValues] = useState({
    BrandName: "",
    ModelName: "",
    year: "",
    mileage: "",
    condition: "",
    price: "",
    description: "",
  });
  const { id } = useParams();
  let navigate = useNavigate();

  // onSubmit handler
  const onSubmit = (carObject) => {
    updateCar(carObject);
  };

  // new method for updating the car
  const updateCar = (carObject) => {
    axios
      .put("http://localhost:4000/cars/update-car/" + id, carObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Car successfully updated");
          navigate("/car-list");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  // Load data from server and reinitialize car form
  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/update-car/" + id)
      .then((res) => {
        const {
          BrandName,
          ModelName,
          year,
          mileage,
          condition,
          price,
          description,
        } = res.data;
        setFormValues({
          BrandName,
          ModelName,
          year,
          mileage,
          condition,
          price,
          description,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return car form
  return (
    <CarForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Car
    </CarForm>
  );
};

export default EditCar;
