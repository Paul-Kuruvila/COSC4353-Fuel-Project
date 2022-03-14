import './Login.css';
import React, {useEffect, useState} from 'react';

const Login = () => {
    /*const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => { //sending data
        const loginData = {username, password};
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData)
        };

        const response = await fetch('http://localhost:5000/auth', options);
        const jsonData = await response.json();
        console.log(jsonData);
    }*/
  return (
      <div className="login">
        <form action = "/auth" method = "post">
            <ul className="signup-boxes">
                <li>
                    <label className="userLabel">Username:</label>
                    <input id="username" className="inputbox" type="text" title="Please enter your username." required placeholder="Enter your username."/>
                </li>
                <li>
                    <label className="passLabel">Password:</label>
                    <input id="password" className="inputbox" type="password" title="Please enter your password." required placeholder="Enter your password."/>
                </li>
                <li>
                    <button className="Submit" type="submit" value ="Login">Login</button>
                </li>
                <div className="signup-text">
                    <p>Don't have an account?
                    <a href="/register">Sign up here</a>.</p>
                </div>
            </ul>
        </form>
      </div>
  );
}

//SUBMIT BUTTON type = "submit" previously for validation, temporarily set to "button" to link to the other pages

export default Login;
