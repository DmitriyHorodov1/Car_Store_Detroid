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
    description:"",
    base64:[0]
  });

  const {id} = useParams(); 

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/cars/car-info/" + id
      )
      .then((res) => {
        const { BrandName, ModelName, year, mileage, condition, price, description, base64 } = res.data;
        setFormValues((prevValues) => ({
          ...prevValues,
          BrandName,
          ModelName,
          year,
          mileage,
          condition,
          price,
          description,
          base64,
          image: null,
        }));
        convertToImage(base64).then((image) => {
          setFormValues((prevValues) => ({ ...prevValues, image }));
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const convertToImage = (base64String) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = base64String;
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });
  };

  

  

  return (
    <>
      <div className='contacs' style={{borderRadius:'2em', backgroundColor:'#415A77'}}>
        <div  className='car_block' style={{borderRadius:'2em', backgroundColor:'#415A77', zIndex: 1, backgroundImage: `url(${formValues.image && formValues.image.src})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
        
          <div  className='car_block2' style={{borderRadius:'2em', backgroundColor:'#415A77', zIndex: 0}}>
            <Typography variant="h3" gutterBottom style={{  textAlign: "center", marginTop:"2%"}} >{formValues.BrandName} {formValues.ModelName}</Typography>  
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }} > Description</Typography>
            <Typography variant="h5" gutterBottom style={{ textAlign: "justify" }} > {formValues.description}</Typography>
            <Typography variant="h5" gutterBottom style={{ textAlign: "justify" }} > Condition : {formValues.condition}  Year : {formValues.year} Mileage : {formValues.mileage}  </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInfo;