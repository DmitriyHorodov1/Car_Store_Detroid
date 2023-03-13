
import React, { useState, useEffect } from "react";
import axios from 'axios';
import SignUpPage from "./SignUpPage/SignUpPage";

// CreateCar Component
const CreateUser = () => {
  const [formValues, setFormValues] = 
    useState({ firstName:'', lastName:'', email:'', password:'' })
  // onSubmit handler
  const onSubmit = userObject => {
    axios.post(
'http://localhost:4000/cars/sign-up', 
    userObject)
      .then(res => {
        if (res.status === 200)
          alert('User successfully created')
        else
          Promise.reject()
          
      })
      .catch(err => alert('Something went wrong'))
  }

  return(
    <SignUpPage initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create User
    </SignUpPage>
  )
}
  
// Export CreateStudent Component
export default CreateUser