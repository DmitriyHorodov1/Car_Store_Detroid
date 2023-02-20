
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CarForm from "../CarForm/CarForm";

// CreateCar Component
const CreateCar = () => {
  const [formValues, setFormValues] = 
    useState({ BrandName:'', ModelName:'', year:'', mileage:'', condition:'', price:'', description:'' })
  // onSubmit handler
  const onSubmit = carObject => {
    axios.post(
'http://localhost:4000/cars/create-car', 
    carObject)
      .then(res => {
        if (res.status === 200)
          alert('Car successfully created')
        else
          Promise.reject()
          
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