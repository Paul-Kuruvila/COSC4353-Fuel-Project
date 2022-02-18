import './FuelQuote.css';

const FuelQuote = () => {
      return (
      <div className="generate">
        <h2>Fuel Quote Form</h2>
          <form>
              <label>Fuel Amount Request (In Gallons)</label>
              <input
                  type ="number"
                  required
              />
              <button onClick>Generate</button>
          </form>
      </div>
      );
}

export default FuelQuote;