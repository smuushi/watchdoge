import React from 'react';
import ufoDogeImage from '../../assets/ufodoge.png';
import './WhyWatchDogeMobile.css';

function WhyWatchDogeMobile() {
  return (
    <div className='why-watchdoge-section-mobile'>
      <div className="watchdoge-image-mobile">
        <img src={ufoDogeImage} alt="WatchDoge" />
      </div>
      <div className="watchdoge-description-mobile">
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
      </div>
    </div>
  );
}

export default WhyWatchDogeMobile;
