
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CarForm from "../CarForm/CarForm";
import { useNavigate } from "react-router-dom";

// CreateCar Component
const CreateCar = () => {
  
  let navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
      const loggedInEmail = localStorage.getItem('loggedInEmail');
      if (loggedInEmail) {
        setEmail(loggedInEmail);
      }
    }, []);
   


  const [formValues, setFormValues] = 
    useState({ BrandName:'', ModelName:'', year:'', mileage:'', condition:'', price:'', description: ''})
  // onSubmit handler
  const onSubmit = carObject => {
    carObject.owner = `${email}`;
    axios.post(
'http://localhost:4000/cars/create-car', 
    carObject)
      .then(res => {
        if (res.status === 200)
          alert('Car successfully created')
         
          Promise.reject()
          navigate("/car-list");

          
      })
      .catch(err => alert('Something went wrong'))
  }

  return(
    <CarForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Car
    </CarForm>
  )
}
  
// Export CreateStudent Component
export default CreateCar