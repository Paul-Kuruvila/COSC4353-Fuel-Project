import './Profile.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

//html/validation/etc. handled by Paul; http requests handled by Eric ; button handler for testing by David

const Profile = ({label}) => {
    const history = useHistory();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    var [state, setState] = useState();
    const [zipcode, setZipcode] = useState();

    function editFields() {
        let fields = ['name','address','address2','city','state','zipcode'];
        for(let i=0; i < fields.length; i++){
            document.getElementById(fields[i]).removeAttribute('readonly');
        }
        document.getElementById('state').removeAttribute('disabled');
        let buttons = ['save', 'logout', 'fuelquote'];
        for(let i=0; i < buttons.length; i++){
            document.getElementById(buttons[i]).style.margin = '15px';
        }
        document.getElementById('edit').style.display = 'none';
    }

    function checkFields(e) {
        console.log(document.getElementById('name').value[0])
        if(document.getElementById('name').value[0]===" "){
            alert("One or more required fields empty!");
            e.preventDefault();
        } else if(document.getElementById('city').value[0]===" "){
            alert("One or more required fields empty!");
            e.preventDefault();
        } else if(document.getElementById('zipcode')===" "){
            alert("One or more required fields empty!");
            e.preventDefault();
        } else {
            return;
        }
    }

    function checkEmpty(e) { // if field is empty or filled with spaces, then display placeholder text
        if(e.target.value === ' '){
            e.target.value = e.target.value.trim();
        }
    }

    function requireChars(e) { // prevents numbers from being typed
        console.log(e.key);
        console.log(e.target.value[0]);
        console.log(e.target.value.length);
        console.log(e.target.value);
        if((e.target.value[0] === ' ' || e.target.value[0] === undefined) && e.key === ' '){
            e.preventDefault();
        }

        if ((e.key.length === 1 && !isNaN(e.key) && !e.ctrlKey && e.key !== ' ') || e.key === '.') {
            e.preventDefault();
            console.log('Please enter a character that is not a number/special character!');
        }
    }

    function requireNums(e){ // prevents characters from being typed
        if (e.key.length === 1 && isNaN(e.key) && !e.ctrlKey || e.key === '.' && e.target.value.toString().indexOf('.') > -1) {
            e.preventDefault();
            console.log('Please enter a number!');
        }
    }

    const profileData = async () => { //retrieving profile data from backend which is retrieved from database
        const response = await fetch('/profiledata');
        const jsonData = await response.json();

        return jsonData;
    }

    document.addEventListener("DOMContentLoaded", async () => { //set variables for visual rendering on page load
        let data = [];
        try {
            data = await profileData();
            if(data.fullname !== "undefined"){
                setName(data.fullname);
                setAddress(data.address);
                if(data.address2 !== "undefined")
                    setAddress2(data.address2);
                setCity(data.city);
                setState(data.state);
                setZipcode(data.zipcode);
            }
        } catch (e) {
            console.log("Error fetching profile data from backend");
            editFields();
            console.log(e);
        }
        console.log(data);
    })

    const handleSubmit = async(e) => { //sending data to backend
        e.preventDefault();
        state = document.getElementById('state').value;
        const profileData = {name, address, address2, city, state, zipcode};
        
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            //credentials: "include",
            body: JSON.stringify(profileData)
        };

        const response = await fetch('/profile', options);
        const jsonData = await response.json();
        
        if (jsonData.login && jsonData.savedInfo) { //if login status is true/successful and information is true/saved
            console.log(jsonData);
            //history.push('/fuelquoteform') //redirect to fuelquoteform
            document.location.reload('true');
          }
          else {
            console.log(jsonData);
        }
    }

    return (
      <div className="profile">
          <h1>Profile</h1>
          <form onSubmit = {handleSubmit}>
            <ul className="signup-boxes">
                <li>
                    <label className="">Full Name</label>
                    <input className="inputbox" id="name" type="text" minLength="2" maxLength="50" required placeholder="Enter your first and last name."
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    onKeyPress = {(e) => requireChars(e)}
                    onSelect = {(e) => checkEmpty(e)}
                    readOnly="readonly"
                    />
                </li>
                <li>
                    <label>Address 1</label>
                    <input className="inputbox" id="address" type="text" minLength="2" maxLength="100"  required placeholder="Enter your address."
                    value = {address}
                    onChange = {(e) => setAddress(e.target.value)}
                    onSelect = {(e) => checkEmpty(e)}
                    readOnly="readonly"
                    />
                </li>
                <li>
                    <label>Address 2</label>
                    <input className="inputbox" id="address2" type="text" maxLength="100" placeholder="Enter your address, if applicable."
                    value = {address2}
                    onChange = {(e) => setAddress2(e.target.value)}
                    readOnly="readonly"
                    />
                </li>
                <li>
                    <label>City</label>
                    <input className="inputbox" id="city" type="text" minLength="2" maxLength="100" required placeholder="Enter the name of your city."
                    value = {city}
                    onChange = {(e) => setCity(e.target.value)}
                    onKeyPress = {(e) => requireChars(e)}
                    onSelect = {(e) => checkEmpty(e)}
                    readOnly="readonly"
                    />
                </li>
                <li>
                    <label>State</label>
                    <select className="inputbox" id="state" name="state" defaultValue={""} value={state} onChange = {(e) => setState(e.target.value)} disabled={true}>
                        <option value="">Select a state</option>
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
                </li>
                <li>
                    <label>Zipcode</label>
                    <input className="inputbox" id="zipcode" type="text" minLength="5" maxLength="9" required placeholder="Enter your zipcode."
                    value = {zipcode}
                    onChange = {(e) => setZipcode(e.target.value)}
                    onKeyPress = {(e) => requireNums(e)}
                    onSelect = {(e) => checkEmpty(e)}
                    readOnly="readonly"
                    />
                </li>
                <li>
                    <div onClick={() => editFields()} id="edit" className="editbutton">Edit Information</div>
                </li>
                <li>
                    <div id="save" className = "submitbutton">
                        <button data-testid="Submit"  className="Submit" type="submit" onClick={() => checkFields()}>Save{label}</button>
                    </div>
                </li>
            </ul>
            <div id="fuelquote" className = "submitbutton">
                <a href="\fuelquoteform">
                    <button data-testid="button" className="Submit" type="button">Fuel Quote</button>
                </a>
            </div>
        </form>
        
      </div>
    );
}

export default Profile;
