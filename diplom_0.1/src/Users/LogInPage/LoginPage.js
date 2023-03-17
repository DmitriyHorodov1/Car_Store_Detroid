import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import { FormGroup, FormControl } from "react-bootstrap";
import { padding } from "@mui/system";
import './LogInPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const LogInPage = (props) => {
const validationSchema = Yup.object().shape({
  
  email: Yup.string()
  
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
      width:"40em",
      padding:"5em",
      borderRadius:'20px'
    
}}>

<Formik {...props} validationSchema={validationSchema} >
            {({ values, handleChange, handleBlur }) => (
              <Form>
               

                <FormGroup>
                <Typography variant="h5" gutterBottom  style={{textAlign:"center"}}>
        Log In
      </Typography>
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
          <Grid container>
                <Grid item xs>
                  <Link href="/pass-rec" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href= "/sign-up" variant="body2">
                    "Don't have an account? Sign Up"
                  </Link>
                </Grid>
              </Grid>
    </div>
    </div>   
    </>
    
  );
  
};

export default LogInPage;