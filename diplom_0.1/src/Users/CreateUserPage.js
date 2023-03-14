import React, { useState, useEffect } from "react";
import axios from 'axios';
import SignUpPage from "./SignUpPage/SignUpPage";
import { useNavigate } from "react-router-dom";

// CreateCar Component
const CreateUser = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({ firstName:'', lastName:'', email:'', password:'' })
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/cars/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onSubmit = userObject => {
    const emailExists = users.some(user => user.email === userObject.email);
    if (emailExists) {
      alert('This email is already registered');
    } else {
      axios.post('http://localhost:4000/cars/sign-up', userObject)
        .then(res => {
          if (res.status === 200){
            alert('User successfully created')
            navigate("/");
          } else {
            Promise.reject()
          }
        })
        .catch(err => alert('Something went wrong'))
    }
  }

  return (
    <SignUpPage initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create User
    </SignUpPage>
  )
}
  
// Export CreateStudent Component
export default CreateUser
