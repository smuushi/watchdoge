import React from 'react';
import rocket from '../../assets/rocket.png';
import BoneHeader from './BoneHeader';

function FooterSection({ headerText, description }) {
    return (
        <div className="footer-section">
            <div>
                <BoneHeader text={headerText} />
                <h6 className='footer-caption'>Selecting Your Wallet:</h6>
                <p className="footer-description">To interact with, trade, or hold 
                WatchDogeCoin, you'll need a secure wallet. Explore your options and 
                select the one that fits your needs.</p>

                <h6 className='footer-caption'>Setting Up Your Wallet:</h6>
                <p className="footer-description">Once downloaded, set up and secure
                 your wallet for WatchDogeCoin 
                transactions.</p>

                <h6 className='footer-caption'>Acquiring WatchDogeCoin:</h6>
                <p className="footer-description">Discover multiple avenues to obtain 
                your very first WatchDogeCoins and join our vigilant community in promoting 
                crypto transparency. </p>
            </div>
            <div>
                <img src={rocket} alt="Rocket" className="rocket-img" />
            </div>
        </div>
    );
}

export default FooterSection;
