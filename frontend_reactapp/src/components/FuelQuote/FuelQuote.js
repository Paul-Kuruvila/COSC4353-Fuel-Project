import './FuelQuote.css';
import React, {useEffect, useState, useCallback} from 'react';
import {useHistory} from "react-router-dom";


const FuelQuote = () => {
  const history = useHistory();

  const [request, setRequest] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState('1.50');
  var [cost, setCost] = useState();

  var [fullname, setName] = useState();
  var [address, setAddress] = useState();
  var [address2, setAddress2] = useState();
  var [City, setCity] = useState();
  var [State, setState] = useState();
  var [Zipcode, setZipcode] = useState();
  //const [totalcost, setFuelCost] = useState();
  //const [backendData, setBackendData] = useState([{}]);
  
  const profileData = async () => { //retrieving saved profile data from backend
    const response = await fetch('/fuelquote')
    const jsonData = await response.json();

    return(jsonData)
  }
  document.addEventListener("DOMContentLoaded", async () => {
    let data = [];
    try {
        data = await profileData();
        setName(data.fullname);
        setAddress(data.address);
        if(data.address2 != "undefined")
            setAddress2(data.address2);
        setCity(data.city);
        setState(data.state);
        setZipcode(data.zipcode);
    } catch (e) {
        console.log("Error fetching profile data from backend");
        console.log(e);
    }
    console.log(data);
  })

  useEffect(() => {
    const finalCostUpdate = async () => {
      cost = (request * price).toFixed(2); //default value
      const fuelData = {request, date, cost};
      //console.log(fuelData);
  
      const options = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        //credentials: "include",
        body: JSON.stringify(fuelData)
      };
      const response = await fetch('/pricingmodulecost', options)
      const jsonData = await response.json();

      try {
        setCost(jsonData.cost);
      } catch (e) {
          console.log("Error fetching cost from backend");
          console.log(e);
      }
      console.log(jsonData.cost)
      return(jsonData);
    }
    finalCostUpdate().catch(console.error)
  });

  const handleSubmit = async(e) => { //sending data
    e.preventDefault();
    cost = (request * price).toFixed(2); //default value
    const fuelData = {request, date, price, cost, address};
    
    const options = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      //credentials: "include",
      body: JSON.stringify(fuelData)
    };
    const response = await fetch('/fuelquotemodule', options);
    const jsonData = await response.json();

    console.log(jsonData);
    return(jsonData);
  }
  
  return (
    <div className="generate">
      <h1>Fuel Quote Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="fuelquote">
              <label className = "fuellabel">Fuel Amount Request (in gallons)</label>
              <input className = "fuel"
                type ="number"
                min="0.5"
                step="0.5"
                required
                value={request}
                onChange = {(e) => {setRequest(e.target.value)}}
              />
              <label className = "datelabel">Delivery Date</label>
              <input className = "date"
                type="date" 
                name="trip-start"
                min="2022-01-01" 
                max="2032-12-31"
                required
                value={date}
                onChange = {(e) => setDate(e.target.value)}
              />
              <label className = "pricelabel">Suggested Price ($ per gallon)</label>
              <input className = "price"
                readOnly
                type = "number"
                min="0.01"
                step="0.01"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
              />
              <label className = "costlabel">Total Cost ($)</label>
              <input className = "cost"
                readOnly
                type = "number"
                min="0.01"
                step="0.01"
                value={cost}
                //onChange = {(e) => setCost(e.target.value)}
              />
        </div>
        <div className = "delAddress">
            <h2>Delivery Address</h2>
            <label>Full Name</label>
            <input
              type ="text"
              disabled = "true"
              value={fullname}
              //onChange = {(e) => setAddress(e.target.value)}
            />
            <label>Address 1</label>
            <input
              type ="text"
              disabled = "true"
              value={address}
              //onChange = {(e) => setAddress(e.target.value)}
            />
            <label>Address 2</label>
            <input
              type ="text"
              disabled = "true"
              value={address2}
              //onChange = {(e) => setAddress2(e.target.value)}
            />
            <label>City</label>
            <input
              type ="text"
              disabled = "true"
              value={City}
              //onChange = {(e) => setCity(e.target.value)}
            />
            <label>State</label>
            <input
              type ="text"
              disabled = "true"
              value={State}
              //onChange = {(e) => setState(e.target.value)}
            />
            <label>Zipcode</label>
            <input
              type ="text"
              disabled = "true"
              value={Zipcode}
              //onChange = {(e) => setZipcode(e.target.value)}
            />
        </div>
        <button>Generate</button>
      </form>
      <a href = "\fuelquotehistory">
      <button type = "button">Quote History</button>
      </a>
    </div>
  );
}

/*useEffect(() => {
  const profileData = async () => { //retrieving saved profile data from backend
    const response = await fetch('/fuelquote')
    const jsonData = await response.json();
    
    try {
        setName(jsonData.fullname);
        setAddress(jsonData.address);
        if(jsonData.address2 != "undefined")
            setAddress2(jsonData.address2);
        setCity(jsonData.city);
        setState(jsonData.state);
        setZipcode(jsonData.zipcode);
    } catch (e) {
        console.log("Error fetching profile data from backend");
        console.log(e);
    }
    console.log(jsonData);
    return(jsonData)
  }
  profileData().catch(console.error)

  const finalCostUpdate = async () => {
    cost = (request * price).toFixed(2); //default value
    const fuelData = {request, date, cost};
    //console.log(fuelData);

    const options = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      //credentials: "include",
      body: JSON.stringify(fuelData)
    };
    const response = await fetch('/pricingmodulecost', options)
    const jsonData = await response.json();

    try {
      setCost(jsonData.cost);
    } catch (e) {
        console.log("Error fetching cost from backend");
        console.log(e);
    }
    console.log(jsonData.cost)
    return(jsonData);
  }
  finalCostUpdate().catch(console.error)
});*/

export default FuelQuote;