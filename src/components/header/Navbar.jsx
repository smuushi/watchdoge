import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/watchdoge" activeClassName="active-link">Watchdoge</NavLink></li>
                <li><NavLink to="/plan" activeClassName="active-link">Plan</NavLink></li>
                <li><NavLink to="/tokenomics" activeClassName="active-link">Tokenomics</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
