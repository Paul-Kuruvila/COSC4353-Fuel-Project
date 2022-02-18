import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header id="navbar">
            <h1 class="title"><a href="/">Fuel.io</a></h1>
            <nav>
                <ul className="options">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="https://github.com/Paul-Kuruvila/COSC4353-Fuel-Project" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar