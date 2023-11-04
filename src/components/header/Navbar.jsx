import React, { useState } from 'react';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="container">

                <div className="menu-icon" onClick={toggleNavbar}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul>
                    <li><a href="#why-watchdoge-section">Watchdoge</a></li>
                    <li><a href="#roadmap">Plan</a></li>
                    <li><a href="#tokenomics">Tokenomics</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
