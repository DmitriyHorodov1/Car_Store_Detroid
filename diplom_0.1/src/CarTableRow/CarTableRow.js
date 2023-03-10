import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './CarTableRow.css'

const CarTableRow = (props) => {
  const { _id, BrandName, ModelName, year, mileage, condition, price, description, base64 } = props.obj;
  const [imageSrc, setImageSrc] = useState(null);

  const deleteCar = () => {
    axios
      .delete(`http://localhost:4000/cars/delete-car/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Car successfully deleted");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  const convertToImage = async (base64String) => {
    try {
      const image = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = base64String;
      });
      setImageSrc(image.src);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (base64) {
      convertToImage(base64);
    }
  }, [base64]);

  return (
    <>
      <div className="card" style={{borderRadius:'10%',  backgroundImage: `url(${imageSrc})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
	  
        <div className="background">
          <Button onClick={deleteCar} size="sm" variant="danger">Delete</Button>
          <Link className="edit-link" to={`/update-car/${_id}`}>Edit</Link>
          <Link to={`/car-info/${_id}`}>Info</Link>
          <ul className="font-size">
            <li>{BrandName} {ModelName} Year {year}</li>
            <li>Price {price} Miles {mileage}</li>
          </ul>
        </div>
       
      </div>
    </>
  );
};

export default CarTableRow;
