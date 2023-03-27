import React, {Component} from 'react';
import './HomePage.css'
import Typography from '@mui/material/Typography';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import {Routes, Route , Link, useParams} from "react-router-dom";
  
export default function HomePage() {

    
    

    return (
         <body className="bgblur"  style={{background: '#778DA9' }} >
        <h4 class = 'text'>
        Detroit
        <span>Detroit</span>
        <span>Detroit</span>
        <span>New and used cars</span>
       </h4>
 
       <Typography  variant="h4" gutterBottom style={{textAlign:'center', padding:'1em', marginTop:'1.5em' }}  >
        Top offers
      </Typography>


       <div class="general-container">
       <input class="radio" type="radio" name="card" id="card-1" />
  <label  class="content" for="card-1">
    <span class="icon">
      <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 class="card-title">
      <Link to="/car-list"> Ford Bronco 2021 </Link>
      
      <span class="subtitle"></span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-2" />
  <label class="content" for="card-2">
    <span class="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 class="card-title">
    <Link to="/car-list"> Bentley Continental Gt 2012 </Link>
      <span class="subtitle"></span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-3" />
  <label class="content" for="card-3">
    <span class="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 class="card-title">
    <Link to="/car-list"> Hyundai Vehicle i20 2019 </Link>
      <span class="subtitle"></span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-4" />
  <label class="content" for="card-4">
    <span class="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 class="card-title">
    <Link to="/car-list">   Nissan GTR R34 1999</Link>
     
      <span class="subtitle"></span>
    </h3>
  </label>
  <input class="radio" type="radio" name="card" id="card-5" />
  <label class="content" for="card-5">
    <span class="icon">
    <NoCrashIcon></NoCrashIcon>
    </span>
    <h3 class="card-title">
    <Link to="/car-list">  BMW M4 2019</Link>
     
      <span class="subtitle"></span>
    </h3>
  </label>
</div>

         </body>
      

      
    );
}