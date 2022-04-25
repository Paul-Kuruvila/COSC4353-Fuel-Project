import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {
    const [signed_in, signIn] = useState(false);

    return (
        <header id="navbar">
            <h1 className = "title"><a href="/">Fuel.io</a></h1>
            <nav className="bar">
                <ul className="options">
                    <li className={signed_in ? "signed_out" : "signed_in"}><a href="/profile">Profile</a></li>
                    <li className={signed_in ? "signed_out" : "signed_in"}><a href="/home">Sign out</a></li>
                    <li className={signed_in ? "signed_in" : "signed_out"}><a href="/login">Login</a></li>
                    <li className={signed_in ? "signed_in" : "signed_out"}><a href="/register">Register</a></li>
                    <li><a href="https://github.com/Paul-Kuruvila/COSC4353-Fuel-Project" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar