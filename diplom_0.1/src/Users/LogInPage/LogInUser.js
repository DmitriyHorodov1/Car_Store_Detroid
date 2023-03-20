import React, { useState } from "react";
import axios from 'axios';
import LogInPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import App from "../../App";

// LogInUser Component
const LogInUser = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const onSubmit = (userObject) => {
    const { email, password } = userObject;
    axios.get(`http://localhost:4000/cars/log-in?email=${email}`)
      .then(response => {
        const user = response.data;
        if (user) {
          if (user.password === password) {
            axios.put(`http://localhost:4000/cars/log-in?email=${email}`, { isAuthenticated: true })
              .then(() => {
                alert('Login successful');
                // Save email to LocalStorage
                localStorage.setItem('loggedInEmail', email);
                navigate("/");
                window.location.reload(); 
               
              })
              .catch(error => {
                console.log(error);
                alert('Failed to log in');
              });
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('Email not registered');
        }
      })
      .catch(error => {
        console.log(error);
        alert('Failed to log in');
      });
  }

  return (
    <LogInPage initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      LogIn
    </LogInPage>
  )
}

export default LogInUser;
