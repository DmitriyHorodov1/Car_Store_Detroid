import './UserCarList.css';
import CarTableRow from "../CarTableRow/CarTableRow";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCarList =() =>{
    
    const [cars, setCars] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios
            .get("http://localhost:4000/cars/")
            .then(({ data }) => {
                setCars(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const loggedInEmail = localStorage.getItem('loggedInEmail');
        if (loggedInEmail) {
            setEmail(loggedInEmail);
        }
    }, []);

    const DataTable = () => {
        return cars
            .filter((car) => car.owner === email)
            .map((res, i) => {
                return <CarTableRow obj={res} key={i} isUserCar={true} />;
            });
    };

    return(
        <>
            <div className="table-spacing">
                {DataTable()} 
            </div>
        </>
    );
}

export default UserCarList;
