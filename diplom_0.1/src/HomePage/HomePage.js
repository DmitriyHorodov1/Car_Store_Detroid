import React, {Component} from 'react';
import './HomePage.css'
import Typography from '@mui/material/Typography';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import {Routes, Route , Link, useParams} from "react-router-dom";
  
export default function HomePage() {

    
    

    return (
         <div className="bgblur main"  style={{background: '#778DA9' }} >
        <h4 class = 'text'>
        Detroit
        <span>Detroit</span>
        <span>Detroit</span>
        <span>New and used cars</span>
       </h4>
 
       <Typography  variant="h4" gutterBottom style={{textAlign:'center', padding:'1em', marginTop:'1.5em' }}  >
        Top offers
      </Typography>


       <div className="general-container">
       <input className="radio" type="radio" name="card" id="card-1"  />
  <label  className="content" for="card-1">
    <span className="icon">
      <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 className="card-title">
      <Link to="/car-list"> Ford Bronco 2021 </Link>
      
      <span className="subtitle"></span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-2" checked />
  <label className="content" for="card-2">
    <span className="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 className="card-title">
    <Link to="/car-list"> Bentley Continental Gt 2012 </Link>
      <span className="subtitle"></span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-3" />
  <label className="content" for="card-3">
    <span className="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 className="card-title">
    <Link to="/car-list"> Hyundai Vehicle i20 2019 </Link>
      <span className="subtitle"></span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-4" />
  <label className="content" for="card-4">
    <span className="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 className="card-title">
    <Link to="/car-list">   Nissan GTR R34 1999</Link>
     
      <span className="subtitle"></span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-5" />
  <label className="content" for="card-5">
    <span className="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 className="card-title">
    <Link to="/car-list">  BMW M4 2019</Link>
     
      <span className="subtitle"></span>
    </h3>
  </label>
</div>

         </div>
      

      
    );
}