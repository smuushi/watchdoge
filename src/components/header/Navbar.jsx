import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#why-watchdoge-section">Watchdoge</a></li>
                <li><a href="#roadmap">Plan</a></li>
                <li><a href="#tokenomics">Tokenomics</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;
