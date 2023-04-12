import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from "@mui/material/Button";
import "./CarForm.css";
const CarForm = (props) => {
  const validationSchema = Yup.object().shape({
    BrandName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("Required"),
    ModelName: Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, "Special characters are not available")
      .required("Required"),
    year: Yup.number()
      .required("Required")
      .min(1900, "Year must be greater than 1900")
      .max(
        new Date().getFullYear(),
        "Year must be less than or equal to current year"
      ),
    mileage: Yup.number()
      .required("Required")
      .min(0, "Mileage must be greater than or equal to 0"),
    condition: Yup.string().required("Required"),
    price: Yup.number()
      .required("Required")
      .min(0, "Price must be greater than or equal to 0"),
    description: Yup.string().required("Required"),
    base64: Yup.string()
      .notOneOf(["Nope", "No"], "Invalid base64 value")
      .required("Required"),
  });

  console.log(props);
  // define the function that converts the file to base64
  const [image, setImage] = useState(null);
  const [base64String, setBase64String] = useState(null);

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setBase64String(base64);
    setImage(URL.createObjectURL(file));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const currencies2 = [
    {
      value: " ",
      label: "Select a condition",
    },
    {
      value: "New",
      label: "New",
    },
    {
      value: "Used",
      label: "Used",
    },
  ];

  return (
    <>
      <body>
        <div
          className=" forma  "
          style={{
            backgroundColor: "#E0E1DD",
            width: "40em",
            padding: "5em",
            borderRadius: "20px",
          }}
        >
          <Formik {...props} validationSchema={validationSchema}>
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <FormGroup>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    Create Car
                  </Typography>
                  <TextField
                    label="Brand Name"
                    id="BrandName"
                    name="BrandName"
                    type="text"
                    value={values.BrandName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="BrandName"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>
                <FormGroup>
                  <TextField
                    label="Model Name"
                    id="ModelName"
                    name="ModelName"
                    type="text"
                    value={values.ModelName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="ModelName"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>
                <FormGroup>
                  <TextField
                    label="     "
                    id="phone"
                    type="file"
                    name="photo"
                    value={values.photo}
                    onChange={(event) => handleFileInputChange(event)}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="photo"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    id="base64"
                    name="base64"
                    select
                    label="Do you want save photo ?"
                    defaultValue="Nope"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Nope">
                      <em>Pick your answer !</em>
                    </MenuItem>
                    <MenuItem value="No">No</MenuItem>
                    <MenuItem value={base64String}>Yes</MenuItem>
                  </TextField>
                  <ErrorMessage
                    name="base64"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    label="Year"
                    id="year"
                    name="year"
                    type="text"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="year"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>
                <FormGroup>
                  <TextField
                    label="Mileage"
                    id="mileage"
                    name="mileage"
                    type="number"
                    value={values.mileage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="mileage"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    id="condition"
                    name="condition"
                    select
                    label="Condition"
                    defaultValue=" "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    {currencies2.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <ErrorMessage
                    name="condition"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    label="Price"
                    id="price"
                    name="price"
                    type="number"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="price"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>

                <FormGroup>
                  <TextField
                    label="Description"
                    id="description"
                    name="description"
                    type="text"
                    multiline
                    maxRows={15}
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="description"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: "1.2em" }}
                  />
                </FormGroup>

                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    marginLeft: "35%",
                    marginTop: "3%",
                    width: "10em",
                    height: "4em",
                  }}
                >
                  {props.children}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </body>
    </>
  );
};

export default CarForm;
