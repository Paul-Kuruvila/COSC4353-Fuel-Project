import './Profile.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

const Profile = () => {
    const history = useHistory();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    var [state, setState] = useState();
    const [zipcode, setZipcode] = useState();

    const [backendData, setBackendData] = useState([{}]);
    var editState = {
        name: false,
        address: false,
        address2: false,
        city: false,
        state: false,
        zipcode: false
    };

    function editFields() {
        let fields = ['name','address','address2','city','state','zipcode'];
        for(let i=0; i < fields.length; i++){
            document.getElementById(fields[i]).removeAttribute('readonly');
        }
        //document.getElementById('state').removeAttribute('disabled');
    }

    async function backend() {
        const response = await fetch('/profile');
        const jsonData = await response.json();
        
        return(jsonData);
        

        /*setBackendData(jsonData);
        setName(jsonData[0].fullname);
        setAddress(jsonData[0].address);
        if(jsonData[0].address2 != "undefined")
            setAddress2 (jsonData[0].address2);
        setCity(jsonData[0].city);
        setState(jsonData[0].state);
        setZipcode(jsonData[0].zipcode);*/
        //console.log(jsonData);
        // //console.log(jsonData.address);
        // if(jsonData[0].fullname == undefined)
        //     editState = "true";
        // const clientData = {name, address, address2, city, state, zipcode};
        //console.log(jsonData);
        //console.log(clientData); // data from db->backend->frontend(here)
    }

    document.addEventListener("DOMContentLoaded", async () => {
        let data = [];

        try {
            data = await backend();
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
    

    const handleSubmit = async(e) => { //sending data
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
            history.push('/fuelquoteform') //redirect to fuelquoteform
          }
          else {
            console.log(jsonData);
        }
    }

    const handleLogout = async(e) => { //sending data
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include"
            //body: JSON.stringify(profileData)
        };

        const response = await fetch('/logout', options);
        const jsonData = await response.json();

        if (jsonData.login == false) { //if login status is false
            console.log(jsonData);
            history.push('/login') //redirect back to login page
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
                    <input className="inputbox" id="name" type="text" required placeholder="Enter your first and last name."
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    readOnly="readonly"
                    />
                    <div className='editbutton'>(edit)</div>
                </li>
                <li>
                    <label>Address 1</label>
                    <input className="inputbox" id="address" type="text" required placeholder="Enter your address."
                    value = {address}
                    onChange = {(e) => setAddress(e.target.value)}
                    readOnly="readonly"
                    />
                    <div className='editbutton'>(edit)</div>
                </li>
                <li>
                    <label>Address 2</label>
                    <input className="inputbox" id="address2" type="text" placeholder="Enter your address, if applicable."
                    value = {address2}
                    onChange = {(e) => setAddress2(e.target.value)}
                    readOnly="readonly"
                    />
                    <div className='editbutton'>(edit)</div>
                </li>
                <li>
                    <label>City</label>
                    <input className="inputbox" id="city" type="text" required placeholder="Enter the name of your city."
                    value = {city}
                    onChange = {(e) => setCity(e.target.value)}
                    readOnly="readonly"
                    />
                    <div className='editbutton'>(edit)</div>
                </li>
                <li>
                    <label>State</label>
                    <select className="inputbox" id="state" name="state" defaultValue={""} value={state} readOnly={true}>
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
                    <div className='editbutton'>(edit)</div>
                </li>
                <li>
                    <label>Zipcode</label>
                    <input className="inputbox" id="zipcode" type="text" required placeholder="Enter your zipcode."
                    value = {zipcode}
                    onChange = {(e) => setZipcode(e.target.value)}
                    readOnly="readonly"
                    />
                    <div onClick={() => editFields()} className='editbutton'>(edit)</div>
                </li>
                <li>
                    <div className = "submitbutton">
                        <a href="\fuelquoteform">
                        <button className="Submit" type="submit">Save</button>
                        </a>
                    </div>
                </li>
            </ul>
        </form>
        <form onSubmit = {handleLogout}>
            <div className = "logoutButton">
                <a href="\login">
                <button className="Submit" type="submit">Logout</button>
                </a>
            </div>
        </form>
        <div className = "submitbutton">
            <a href="\fuelquoteform">
            <button className="Submit" type="button">Fuel Quote</button>
            </a>
        </div>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Profile;
