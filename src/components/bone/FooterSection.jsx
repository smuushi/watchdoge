import React from 'react';
import rocket from '../../assets/rocket.png';

function FooterSection({ headerText, description }) {
    return (
        <div className="footer-section">
            <h2 className="footer-header">{headerText}</h2>
            <p className="footer-description">{description}</p>
            <img src={rocket} alt="Rocket" className="rocket-img" />
        </div>
    );
}

export default FooterSection;
