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
              <h2>What is WatchDoge?</h2>
            </div>

            <div className='point'>
              <h5>Our Mission:</h5>
              <p>Become the most righteous Meme in the universe</p>
            </div>
            <div className='point'>
              <h5>Our Vision:</h5>
              <p>
                Envisioning a cryptocurrency landscape with informed investors, 
                emphasizing transparency, accountability, and education for a trustworthy and inclusive 
                financial ecosystem.  
              </p>
            </div>
            <div className='point'>
              <h5>Why We Need Your Participation:</h5>
              <p> 
                Joining and discussing WatchDogeCoin boosts visibility for genuine projects. 
                A strong community strengthens the token's value and overall ecosystem. 
                Join us in creating a safer crypto space!
              </p>
            </div>

            {/* Repeat the above for additional paragraphs of content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWatchDoge;
