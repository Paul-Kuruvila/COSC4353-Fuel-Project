import React, {useState} from 'react';
import './Navbar.css';
import {useHistory} from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const [signed_in, setStatus] = useState();

    async function backend() {
        const options = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            credentials: "include"
            //body: JSON.stringify(profileData)
        };
        const response = await fetch('/loginstatus', options);
        const jsonData = await response.json();
        //console.log(jsonData)

        return jsonData;
    }

    document.addEventListener("DOMContentLoaded", async () => {
        let data = [];
        try {
            data = await backend();
            setStatus(data[1]);
            // console.log(signed_in);
        } catch (e) {
            console.log("Error fetching profile data from backend");
            console.log(e);
        }
        //console.log(data);
    })

    const handleLogin = async(e) => { //sending data
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include"
            //body: JSON.stringify(profileData)
        };

        const response = await fetch('/auth', options);
        const jsonData = await response.json();

        //setStatus(jsonData)

        if (jsonData.login === false) { //if login status is false
            console.log(jsonData);
            history.push('/login') //redirect back to login page
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

        setStatus(true);

        if (jsonData.login === false) { //if login status is false
            console.log(jsonData);
            history.push('/') //redirect back to home page
            document.location.reload('true');
        }
        else {
            console.log(jsonData);
        }
    }

    return (
        <header id="navbar">
            <h1 className = "title"><a href="/">Fuel.io</a></h1>
            <nav className="bar">
                <ul className="options">
                    <li className={signed_in ? "signed_out" : "signed_in"}><a href="/profile">Profile</a></li>
                    <li className={signed_in ? "signed_out" : "signed_in"} onClick={handleLogout} ><a href="/">Sign out</a></li>
                    <li className={signed_in ? "signed_in" : "signed_out"}><a href="/login">Login</a></li>
                    <li className={signed_in ? "signed_in" : "signed_out"}><a href="/register">Register</a></li>
                    <li><a href="https://github.com/Paul-Kuruvila/COSC4353-Fuel-Project" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar