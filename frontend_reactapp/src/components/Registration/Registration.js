import './Registration.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

//Registration component html/validation/etc. handled by Paul; http requests handled by Eric; button handler for testing by David

const Registration = ({label}) => {
    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [validCred, setValidity] = useState(true);

    const handleSubmit = async (e) => { //sending data
        e.preventDefault();
        const registerData = {username, password};
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(registerData)
        };
        
        const response = await fetch('/register', options);
        const jsonData = await response.json();

        setValidity(jsonData.registered);
        console.log(validCred);
        
        if (jsonData.registered) { //if registration is successful
            console.log(jsonData);
            history.push('/login') //redirect to login page
        }
        else {
            console.log(jsonData);
        }
  }
  return (
      <div className="register">
        <form onSubmit = {handleSubmit}>
            <ul className="signup-boxes">
                <li>
                    <label className="userLabel">Username:</label>
                    <input id="username" className="inputbox" type="text" title="Please enter your desired username." required placeholder="Enter a username."
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    onSelect = {() => setValidity(true)}
                    />
                </li>
                <li>
                    <label className="passLabel">Password:</label>
                    <input id="password" className="inputbox" type="password" title="Please enter your desired password." required placeholder="Enter a password."
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                </li>
                <li>
                    <label className={validCred ? "hideInvalid" : "showInvalid"}>Account name is already taken.<br/>Please enter a different username.</label>
                </li>
                <li>
                    <button data-testid="button" className="Submit" type="submit">Submit{label}</button>
                </li>
            </ul>
        </form>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Registration;
