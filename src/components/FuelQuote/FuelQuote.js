import './FuelQuote.css';
import {useState} from "react";

const FuelQuote = () => {
  const [request, setRequest] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState('2.50');
  const [cost, setCost] = useState();

  const [address, setAddress] = useState('address1');
  const [address2, setAddress2] = useState('address2');
  const [City, setCity] = useState('Houston');
  const [State, setState] = useState('Texas');
  const [Zipcode, setZipcode] = useState('77204');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fuelQuote = {request, date, price, cost, address}
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
                disabled = "true"
                type = "number"
                min="0.01"
                step="0.01"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
              />
              <label className = "costlabel">Total Cost ($)</label>
              <input className = "cost"
                disabled = "true"
                type = "number"
                min="0.01"
                step="0.01"
                value={(request * price).toFixed(2)}
                onChange = {(e) => setCost(e.target.value)}
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
        <a href = "\fuelquotehistory">
        <button type = "button">Generate</button>
        </a>
        </form>
      </div>
      );
}

//<button onClick>Generate</button> was used previously for validation, temporarily set to "button" to link to the other pages


export default FuelQuote;