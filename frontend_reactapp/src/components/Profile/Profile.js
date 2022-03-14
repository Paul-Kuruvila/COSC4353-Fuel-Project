import './Profile.css';
import React, {useEffect, useState} from 'react';

const Profile = () => {
    const [name, setName] = useState();

    const [address, setAddress] = useState('address1');
    const [address2, setAddress2] = useState('address2');
    const [City, setCity] = useState('Houston');
    const [State, setState] = useState('Texas');
    const [Zipcode, setZipcode] = useState('77204');

    const [backendData, setBackendData] = useState([{}]);
  
    const handleSubmit = async(e) => { //sending data
    e.preventDefault();
    
     const options = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(address)
    };

    const response = await fetch('http://localhost:5000/profile', options);
    const jsonData = await response.json();
    console.log(jsonData);
  }
  return (
      <div className="profile">
          <h1>Profile</h1>
          <form onSubmit = {handleSubmit}>
            <ul className="signup-boxes">
                <li>
                    <label className="">Full Name</label>
                    <input className="inputbox" type="text" required placeholder="Enter your first and last name."/>
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                </li>
                <li>
                    <label>Address 1</label>
                    <input className="inputbox" type="text" required placeholder="Enter your address."/>
                    value = {address}
                    onChange = {(e) => setAddress(e.target.value)}
                </li>
                <li>
                    <label>Address 2</label>
                    <input className="inputbox" type="text" placeholder="Enter your address, if applicable."/>
                    value = {address2}
                    onChange = {(e) => setAddress2(e.target.value)}
                </li>
                <li>
                    <label>City</label>
                    <input className="inputbox" type="text" required placeholder="Enter the name of your city."/>
                    value = {City}
                    onChange = {(e) => setCity(e.target.value)}
                </li>
                <li>
                    <label>State</label>
                    <select className="inputbox" id="state" name="state">
                        <option value="" selected>Select a state</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AR">AR</option>    
                        <option value="AZ">AZ</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="IA">IA</option>    
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="MA">MA</option>
                        <option value="MD">MD</option>
                        <option value="ME">ME</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MO">MO</option>    
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="NC">NC</option>    
                        <option value="NE">NE</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>            
                        <option value="NV">NV</option>
                        <option value="NY">NY</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>    
                        <option value="WV">WV</option>
                        <option value="WY">WY</option>
                    </select>
                    value = {State}
                    onChange = {(e) => setState(e.target.value)}
                </li>
                <li>
                    <label>Zipcode</label>
                    <input className="inputbox" type="text" required placeholder="Enter your zipcode."/>
                    value = {Zipcode}
                    onChange = {(e) => setZipcode(e.target.value)}
                </li>
                <li>
                    <div className = "submitbutton">
                        <a href="\fuelquoteform">
                        <button className="Submit" type="button">Save</button>
                        </a>
                    </div>
                </li>
            </ul>
        </form>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Profile;
