import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './CarTableRow.css'



const CarTableRow = (props ) => {
const { _id, BrandName, ModelName, year, mileage, condition, price, description } = props.obj;
const deleteCar = () => {
	axios
	.delete(
"http://localhost:4000/cars/delete-car/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Car successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};
return (
	<>
     
	<div  className="card " style={{borderRadius:'10%', backgroundColor:'#415A77'}} >
	
		<div className="background">
		<Button onClick={deleteCar} size="sm" variant="danger"> Delete </Button>
		<Link className="edit-link" to={"/update-car/" + _id}> Edit </Link>
		<Link to={"/car-info/"+_id}> Info </Link>
		<ul className="font-size">
			<li>{BrandName}  {ModelName} Year {year} </li>
			<li> Price {price}  Miles {mileage}</li>
		</ul>
	</div>
	</div>
	
	</>

);
};

export default CarTableRow;
/*<li>
		<Link className="edit-link"
		to={"/edit-car/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteCar}
		size="sm" variant="danger">
		Delete
		</Button>
	</li>*/

	