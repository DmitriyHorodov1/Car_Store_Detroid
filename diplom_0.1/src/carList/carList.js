import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import CarTableRow from "../CarTableRow/CarTableRow";

import "./carList.css"  
const CarList = () => {

  const [priceFromError, setPriceFromError] = useState(false);
  const [priceToError, setPriceToError] = useState(false);

  const [brandName, setBrandName] = useState("");
  const [modelName, setModelName] = useState("");
  const [brandNameError, setBrandNameError] = useState("");
  const [modelNameError, setModelNameError] = useState("");

  const [mileage, setMileage] = useState([0, 500000]);

  const handleChange = (event) => {
    setMileage([event.target.value, event.target.value]);
  };

    const [selectedYear, setSelectedYear] = useState('');

    const [formData, setFormData] = useState({});


    const handleBrandNameChange = (e) => {
      const value = e.target.value;
      if (/^[a-zA-Z\s]+$/.test(value)) {
        setBrandName(value);
        setBrandNameError("");
      } else {
        setBrandNameError("Only letters and spaces are allowed");
      }
    };
    
    const handleModelNameChange = (e) => {
      const value = e.target.value;
      if (/^[a-zA-Z\s]+$/.test(value)) {
        setModelName(value);
        setModelNameError("");
      } else {
        setModelNameError("Only letters and spaces are allowed");
      }
    };
    
    const handlePriceFromChange = (e) => {
      if (parseInt(e.target.value, 10) < 0) {
        setPriceFromError(true);
      } else {
        setPriceFromError(false);
      }
    };
  
    const handlePriceToChange = (e) => {
      if (parseInt(e.target.value, 10) < 0) {
        setPriceToError(true);
      } else {
        setPriceToError(false);
      }
    };


    const handleSubmit = (event) => {
      event.preventDefault();
      setFormData({
        priceFrom: event.target.priceFrom.value,
        priceTo: event.target.priceTo.value,
        BrandName: event.target.BrandName.value,
        ModelName: event.target.ModelName.value,
        year: event.target.year.value,
        mileage: event.target.mileage.value
      });
      


    };



    const years = [ ];
    for (let i = 1930; i <= 2023; i++) {
      years.push(i);
    }
    

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor, ) => (
        <>
             <div role="presentation"
               style={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550, backgroundColor: "#E0E1DD", width: 550, height: '100%' }}>
          
           
          <form onSubmit={handleSubmit} style={{ marginTop: '4%' }}>
              <Typography style={{ marginLeft: '7%' }} variant="h3" gutterBottom>Price $</Typography>

              <TextField style={{ marginLeft: '7%' }} name="priceFrom" label="From" type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                error={priceFromError}
                helperText={priceFromError ? "Price From should not be negative" : ""}
                onChange={handlePriceFromChange}
                 />
              <TextField style={{ marginLeft: '7%' }} name="priceTo" label="To" type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                error={priceToError}
            helperText={priceToError ? "Price To should not be negative" : ""}
            onChange={handlePriceToChange}
                 />
                
                
              <Typography style={{ marginLeft: '7%', marginTop: '2%' }} variant="h3" gutterBottom>Brand</Typography>
              <TextField style={{ marginLeft: '7%', width: '29em' }} name="BrandName" label="Brand" type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                error={Boolean(brandNameError)}
                helperText={brandNameError}
                onChange={handleBrandNameChange}
                 />
                
              <Typography style={{ marginLeft: '7%', marginTop: '2%' }} variant="h3" gutterBottom>Model</Typography>
              <TextField style={{ marginLeft: '7%', width: '29em' }} name="ModelName" label="Model" type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                error={Boolean(modelNameError)}
                helperText={modelNameError} 
                onChange={handleModelNameChange}
                />
                
              <Typography style={{ marginLeft: '7%', marginTop: '2%' }} variant="h3" gutterBottom>Year</Typography>
              <InputLabel style={{ marginLeft: '10%', width: '29em' }} id="demo-simple-select-label">Select a year</InputLabel>
              <Select style={{ marginLeft: '7%', width: '29em' }}
               type="number"
                name="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >

                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
              
              <Typography style={{ marginLeft: '7%', marginTop: '2%' }} variant="h3" gutterBottom>Mileage</Typography>


              <input
                name="mileage"
                style={{ marginLeft: '7%', width: '29em' }}
                type="range"
                min={0}
                max={500000}
                step={10000}
                value={mileage[0]}
                onChange={handleChange} />
              <Typography style={{ marginLeft: '40%', marginTop: '2%' }} variant="h5">{mileage[0]}</Typography>
              
              <Button variant="outlined" type="submit" disabled={priceFromError || priceToError || Boolean(brandNameError) || Boolean(modelNameError)} style={{ marginLeft: '31%', marginTop: '10%', width: '11em', height: '4.5em', fontSize: '1.2em' }}>Apply</Button>

              

             </form>
              

             
              </div>
        
        </>
      );

///////////////////////////////////////////////////////////////////////////////
  const [cars, setCars] = useState([]);
  
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
   
  const DataTable = () => {
    return Object.keys(formData).length === 0
      ? cars.map((res, i) => {
          return <CarTableRow obj={res} key={i} />;
        })
      : cars
          .filter(car => {
            let matches = true;
            if (formData.BrandName) {
              matches = matches && (car.BrandName === formData.BrandName);
            }
            if (formData.ModelName) {
              matches = matches && (car.ModelName === formData.ModelName);
            }
            if (selectedYear) {
              matches = matches && (car.year === selectedYear);
            }
            if (formData.priceFrom) {
              matches = matches && (car.price >= formData.priceFrom);
            }
            if (formData.priceTo) {
              matches = matches && (car.price <= formData.priceTo);
            }
            if (formData.mileage) {
              matches = matches && (car.mileage <= formData.mileage);
            }
            return matches;
          })
          .map((res, i) => {
            return <CarTableRow obj={res} key={i} />;
          });
  };
  /////////////////////////////////////////////////////////////////////////
  return (
    //table  and filter
    <><div className="table-spacing" >
      {DataTable()} 
      
    
   
<div className="filterPos" >
       {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <IconButton  size="large" onClick={toggleDrawer(anchor, true)} aria-label="TuneIcon"   >
            <TuneIcon  style={{fontSize: 40}} />
           </IconButton >
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          
          >
            {list(anchor)}
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
</div>

    </>
  );
};
  
export default CarList;