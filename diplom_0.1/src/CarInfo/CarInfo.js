import React, { useState, useEffect } from "react";
import axios from "axios";
import './CarInfo.css'
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';


const CarInfo = (props) => {

  const [formValues, setFormValues] = useState({
    BrandName: "",
    ModelName: "",
    year: "",
    mileage: "",
    condition:"",
    price:"",
    description:""
  });

    const {id} = useParams(); 
    useEffect(() => {
      axios
        .get(
          "http://localhost:4000/cars/car-info/" + id
        )
        .then((res) => {
          const { BrandName, ModelName, year, mileage, condition, price, description  } = res.data;
          setFormValues({ BrandName, ModelName, year, mileage, condition, price, description  });
        })
        .catch((err) =>  console.log(err));
    }, []);
  

  return (
    <>
    
    <div className='contacs' style={{borderRadius:'2em', backgroundColor:'#415A77'}}>
  <div className='car_info' style={{borderRadius:'2em'}}>
    <Typography variant="h2" gutterBottom style={{textAlign: "center", marginBottom:'5%' }}>{formValues.BrandName}</Typography>
    <div  className='car_block' style={{borderRadius:'2em', backgroundColor:'#415A77', zIndex: 1}}>
      <div  className='car_block2' style={{borderRadius:'2em', backgroundColor:'#415A77', zIndex: 0}}>
        <Typography variant="h3" gutterBottom style={{  textAlign: "center", marginTop:"2%"}} >{formValues.BrandName} {formValues.ModelName}</Typography>  
        <Typography variant="h4" gutterBottom style={{ textAlign: "center" }} > Description</Typography>
        <Typography variant="h5" gutterBottom style={{ textAlign: "justify" }} > {formValues.description}</Typography>
        <Typography variant="h5" gutterBottom style={{ textAlign: "justify" }} > Condition : {formValues.condition}  Year : {formValues.year} Mileage : {formValues.mileage}  </Typography>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default CarInfo;
