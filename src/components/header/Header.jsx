import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import ConnectWalletButton from './ConnectWalletButton';
import logo from "../../assets/logo.png"

function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <Navbar />
                <ConnectWalletButton />
            </div>
        </header>
    );
}

export default Header;
