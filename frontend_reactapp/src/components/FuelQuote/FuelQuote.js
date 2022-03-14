import './FuelQuote.css';
import React, {useEffect, useState} from 'react';

const FuelQuote = () => {
  const [request, setRequest] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState('2.50');
  var [cost, setCost] = useState();

  const [address, setAddress] = useState('address1');
  const [address2, setAddress2] = useState('address2');
  const [City, setCity] = useState('Houston');
  const [State, setState] = useState('Texas');
  const [Zipcode, setZipcode] = useState('77204');

  const [backendData, setBackendData] = useState([{}]);
  
  const handleSubmit = async(e) => { //sending data
    e.preventDefault();
    cost = (request * price).toFixed(2);
    const fuelData = {request, date, price, cost, address};
    
    const options = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(fuelData)
    };

    /*fetch('http://localhost:5000/pricingmodule', options).then(response => {
      const jsonData = response.json();
      console.log(response);
    });*/
    
    const response = await fetch('http://localhost:5000/fuelquotemodule', options);
    const jsonData = await response.json();
    console.log(jsonData);
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
                onChange = {(e) => setRequest(e.target.value)}
              />
              <label className = "datelabel">Delivery Date:</label>
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
                value={(request * price).toFixed(2)}
              />
        </div>
        <div className = "delAddress">
            <h2>Delivery Address</h2>
            <label>Address 1</label>
            <input
              type ="text"
              disabled = "true"
              value={address}
              onChange = {(e) => setAddress(e.target.value)}
            />
            <label>Address 2</label>
            <input
              type ="text"
              disabled = "true"
              value={address2}
              onChange = {(e) => setAddress2(e.target.value)}
            />
            <label>City</label>
            <input
              type ="text"
              disabled = "true"
              value={City}
              onChange = {(e) => setCity(e.target.value)}
            />
            <label>State</label>
            <input
              type ="text"
              disabled = "true"
              value={State}
              onChange = {(e) => setState(e.target.value)}
            />
            <label>Zipcode</label>
            <input
              type ="text"
              disabled = "true"
              value={Zipcode}
              onChange = {(e) => setZipcode(e.target.value)}
            />
        </div>
        <button onClick>Generate</button>
      
      </form>
      <a href = "\fuelquotehistory">
      <button type = "button">fqh</button>
      </a>
    </div>
  );
}

//<button onClick>Generate</button> was used previously for validation, temporarily set to "button" to link to the other pages
/*  useEffect(() => {
    fetch("/pricingmodule").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
    
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    cost = (request * price).toFixed(2);
    const fuelQuote = {request, date, price, cost, address};
   
    fetch('http://localhost:5000/pricingmodule', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(fuelQuote)
    }).then(() => {
      console.log('new quote added')
    })
    
  }*/

export default FuelQuote;