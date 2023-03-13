import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { padding } from "@mui/system";
import './SignUpPage.css'

const SignUpPage = (props) => {
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required("Required"),
  lastName: Yup.string()
  .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
  .required("Required"),
  email: Yup.string()
  .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
  .required("Required"),
  password: Yup.string()
  .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
  .required("Required"),



});



console.log(props);


  

  return (
    <>
        <div className="background-image-box">
    <div className=" formBack  " style={{ 
      backgroundColor:'#E0E1DD',
      width:"60em",
      padding:"5em",
      

}}>

      <Formik {...props} validationSchema={validationSchema}  >
        
        <Form  >
          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1" > 
            <Typography variant="h4" gutterBottom>First Name</Typography>
            </label>
            <Field name="firstName" type="text" 
                className="form-control form-control-lg  " />
                
            <ErrorMessage
              name="firstName"
              className="d-block invalid-feedback"
              component="span"
              style={{fontSize:'1.5em'}}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1" > 
            <Typography variant="h4" gutterBottom>Last Name</Typography>
            </label>
            <Field name="lastName" type="text" 
                className="form-control form-control-lg  " />
            <ErrorMessage
              name="lastName"
              className="d-block invalid-feedback"
              component="span"
              style={{fontSize:'1.5em'}}
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1" > 
            <Typography variant="h4" gutterBottom>email</Typography>
            </label>
            <Field name="email" type="text" 
                className="form-control form-control-lg  " />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
              style={{fontSize:'1.5em'}}
            />
          </FormGroup>
        
          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1" > 
            <Typography variant="h4" gutterBottom>password</Typography>
            </label>
            <Field name="password" type="password" 
                className="form-control form-control-lg  " />
            <ErrorMessage
              name="password"
              className="d-block invalid-feedback"
              component="span"
              style={{fontSize:'1.5em'}}
            />
          </FormGroup>
  
        <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
            
          </Button>
        </Form>
      </Formik>
    </div>
    </div>   
    </>
    
  );
  
};

export default SignUpPage;