import './FuelQuote.css';
import {useState} from "react";

const FuelQuote = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState('2.50');
      return (
      <div className="generate">
        <h1>Fuel Quote Form</h1>
          <form>
              <label>Fuel Amount Request (in gallons)</label>
              <input
                type ="number"
                min="1.00"
                step="0.01"
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
              />
              <label>Delivery Date:</label>
              <input
                type="date" 
                name="trip-start"
                value="2022-01-01"
                min="2022-01-01" 
                max="2032-12-31"
              />
              <label>Suggested Price ($ per gallon)</label>
              <input 
                disabled = "true"
                type = "number"
                min="0.01"
                step="0.01"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
              />
              <label>Total Cost ($)</label>
              <input 
                disabled = "true"
                type = "number"
                min="0.01"
                step="0.01"
                value={(title * price).toFixed(2)}
              />
              <button onClick>Generate</button>
          </form>
      </div>
      );
}

export default FuelQuote;