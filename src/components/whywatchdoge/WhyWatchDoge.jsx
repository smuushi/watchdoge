import React from 'react';
import './WhyWatchDoge.css';
import ufoDogeImage from '../../assets/ufodoge.png';
import spaceImage from "../../assets/space.png";

function WhyWatchDoge() {
  
  return (
    <div className='why-watchdoge-section' id='why-watchdoge-section'>
      <img src={spaceImage} alt="space-background" className='space-background' />
      <div className="why-watchdoge-container">
        <div className="why-watchdoge-content">
          <div className="watchdoge-image">

            <img src={ufoDogeImage} alt="WatchDoge" />
          </div>
          <div className="watchdoge-description">
            <div className='why-watchdoge-header'>
              <h2>What is Watch Meme DAO?</h2>
            </div>

            <div className='point'>
              <h5>Who are we:</h5>
              <p>We're a squad of crypto devs from the land of sushi and samurais, armed with meme knowledge and a passion to protect the memeverse. Led by our fearless mascot, Captain Tomborg, we're on a mission to save the memeverse from rug-pulling villains. </p>
            </div>

            <div className='point'>
              <h5>Our Mission & Vision:</h5>
              <p>Led by our fearless mascot, Captain Tomborg, we're on a mission to save the memeverse from rug-pulling villains. We envision a Web3 landscape that champions informed investors, prioritizing transparency, accountability, and education. Our goal is to foster a trustworthy and inclusive meme financial ecosystem, where individuals can confidently navigate the world of cryptocurrencies with knowledge and integrity.</p>
            </div>
            <div className='point'>
              <h5>How we can add value to you:</h5>
              <p> 
              Stay ahead of the curve with our meme media aggregator! You can find the latest meme news, insights, and top meme picks of the week. Our memecoin analysis will help you navigate the crypto world with confidence, while our blacklist shields you from shady meme coins.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWatchDoge;
