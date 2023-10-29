import React from 'react';
import './WhyWatchDoge.css';
import ufoDogeImage from '../../assets/ufodoge.png';
import spaceImage from "../../assets/space.png";

function WhyWatchDoge() {
  return (
    <div className='why-watchdoge-section'>
      <img src={spaceImage} alt="space-background" className='space-background' />
      <div className="why-watchdoge-container">
        <div className="why-watchdoge-header">
          <h2>Why Web3 WatchDoge?</h2>
        </div>
        <div className="why-watchdoge-content">
          <div className="watchdoge-image">

            <img src={ufoDogeImage} alt="WatchDoge" />
          </div>
          <div className="watchdoge-description">
            <p>Insert the description or content here.</p>
            {/* Repeat the above for additional paragraphs of content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWatchDoge;
