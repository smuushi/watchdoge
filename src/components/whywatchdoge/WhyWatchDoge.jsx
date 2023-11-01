import React from 'react';
import './WhyWatchDoge.css';
import ufoDogeImage from '../../assets/ufodoge.png';
import spaceImage from "../../assets/space.png";

function WhyWatchDoge() {
  return (
    <div className='why-watchdoge-section'>
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
                A cryptocurrency landscape where every investor, whether novice or expert, is empowered with the knowledge to distinguish genuine opportunities from deceitful ones. By advocating for transparency, accountability, and education, we envision a future where crypto thrives as a trustworthy and inclusive financial ecosystem for all.
              </p>
            </div>
            <div className='point'>
              <h5>Why We Need Your Participation:</h5>
              <p> 
                As more people join and talk about WatchDogeCoin, there’ll be better visibility for legitimate projects. A robust community can contribute to the token's utility, demand, and overall ecosystem health. Join us, and let's create a safer crypto space for everyone. 
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
