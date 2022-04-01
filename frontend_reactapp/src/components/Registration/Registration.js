import './Registration.css';
import React, {useEffect, useState} from 'react';

const Registration = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => { //sending data
        e.preventDefault();
        const registerData = {username, password};
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(registerData)
        };
        
        const response = await fetch('http://localhost:5000/register', options);
        const jsonData = await response.json();
        console.log(jsonData);
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
                    <button className="Submit" type="submit">Submit</button>
                </li>
            </ul>
        </form>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Registration;
