import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import ConnectWalletButton from './ConnectWalletButton';
import logo from "../../assets/logo.png"

function Header() {

    const isMobile = window.innerWidth < 768; // Define a threshold for mobile view (adjust as needed)



    return (
        <>
            {isMobile? 
            (<>
                <header className="header">
                    <div className="container">
                        <Navbar />
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                        </a>
                        <ConnectWalletButton />
                    </div>

                </header>
            </>) 
            : 
            (<>
                <header className="header">
                    <div className="container">
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                        </a>
                        <Navbar />
                        <ConnectWalletButton />
                    </div>
                </header>
            </>)}
        </>
    );
}

export default Header;
