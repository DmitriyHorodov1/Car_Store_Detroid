// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import SignUpPage from "../SignUpPage/SignUpPage";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// EditCar Component

const EditUser = (props) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phone: [0],
    password: "",
  });
  const { id } = useParams();
  let navigate = useNavigate();

  const onSubmit = (userObject) => {
    updateUser(userObject);
  };

  const updateUser = (userObject) => {
    axios
      .put("http://localhost:4000/cars/update-user/" + id, userObject)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully updated");
          navigate("/admin-panel");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/update-user/" + id)
      .then((res) => {
        const { firstName, lastName, email, role, phone, password } = res.data;
        setFormValues({
          firstName,
          lastName,
          email,
          role,
          phone,
          password,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return car form
  return (
    <SignUpPage initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update User
    </SignUpPage>
  );
};

export default EditUser;
