import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import { FormGroup, FormControl } from "react-bootstrap";
import { padding } from "@mui/system";
import './SignUpPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
const SignUpPage = (props) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("Required"),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("Required"),
    email: Yup.string()
      .required("Required"),
      role: Yup.string().required("Requied"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Required"),
    password: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Special characters are not available")
      .required("Required")
  });
  


console.log(props);

  return (
    <>
        <div className="background-image-box">
    <div className=" formBack  " style={{ 
      backgroundColor:'#E0E1DD',
      width:"40em",
      height:"50em",
      padding:"5em",
      borderRadius:'20px'
    
}}>

<Formik {...props} validationSchema={validationSchema} >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <FormGroup>
                <Typography variant="h5" gutterBottom  style={{textAlign:"center"}}>
        Sign Up
      </Typography>
                  <TextField
                   label="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="firstName"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: '1.2em' }}
                  />
                </FormGroup>
                <FormGroup>
                  
                  <TextField
                  label="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="lastName"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: '1.2em' }}
                  />
                </FormGroup>
                <FormGroup>
                  
                  <TextField
                  label="Phone"
                    id="phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="lastName"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: '1.2em' }}
                  />
                </FormGroup>

                <FormGroup>
                  
                  <TextField
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="email"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: '1.2em' }}
                  />
                </FormGroup>

                <FormGroup>
              
              <TextField
            id="role"
            name="role"
            select
            label="Role"
            defaultValue="User"
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            fullWidth
            margin="normal"
            
          >
           
          <MenuItem value="User">User</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          
          </TextField>
                <ErrorMessage
                  name="role"
                  className="d-block invalid-feedback"
                  component="span"
                  style={{ fontSize: '1.2em' }}
                />
              </FormGroup>

                <FormGroup>
                  
                  <TextField
                  label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <ErrorMessage
                    name="password"
                    className="d-block invalid-feedback"
                    component="span"
                    style={{ fontSize: '1.2em' }}
                  />
                </FormGroup>

                <Button variant="contained" type="submit" style={{marginLeft:"35%", marginTop:"3%", width:"10em", height:"4em"}}>
                  {props.children}
                </Button>
              </Form>
            )}
          </Formik>
          <Link href= "/log-in" variant="body2" >
                    "Already have account. Login!"
                  </Link>
    </div>
    </div>   
    </>
    
  );
  
};

export default SignUpPage;