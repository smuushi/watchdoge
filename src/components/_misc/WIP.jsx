// WIP.jsx
import React from 'react';
import wipImage from '../../assets/wip.png';  // replace with the path to your image
import './WIP.css'

function WIP() {
    return (
        <div className="wip-container">

            <img src={wipImage} alt="Work in Progress" />
        </div>
    );
}

export default WIP;
