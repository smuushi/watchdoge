import React from 'react';
import './WhyWatchDoge.css';
import ufoDogeImage from '../../assets/ufodoge.png'

function WhyWatchDoge() {
  return (
    <div className="why-watchdoge-container">
      <div className="why-watchdoge-header">
        <h2>Why Web3 WatchDoge?</h2>
      </div>
      <div className="why-watchdoge-content">
        <div className="watchdoge-image">
          {/* You can add the image here */}
          <img src={ufoDogeImage} alt="WatchDoge" />
        </div>
        <div className="watchdoge-description">
          <p>Insert the description or content here.</p>
          {/* Repeat the above for additional paragraphs of content */}
        </div>
      </div>
    </div>
  );
}

export default WhyWatchDoge;
