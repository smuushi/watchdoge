import React from 'react';
import rocket from '../../assets/rocket.png';
import BoneHeader from './BoneHeader';

function FooterSection({ headerText, description }) {
    return (
        <div className="footer-section">
            <div>
                <BoneHeader text={headerText} />
                <p className='footer-caption'>CEX上市准备 :</p>
                <p className="footer-description">{description}</p>
            </div>
            <div>
                <img src={rocket} alt="Rocket" className="rocket-img" />
            </div>
        </div>
    );
}

export default FooterSection;
