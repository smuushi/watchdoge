import React from 'react';
import watchdoge from '../../assets/watchdogeflag.png';
import background from '../../assets/background.png';
import './watchdogeflagsection.css'

function WatchDogeFlagSection() {
    return (
        <div className="watchdoge-flag-section">
            <img src={background} alt="Background" className="background-img" />
            <img src={watchdoge} alt="WatchDoge Mascot" className="mascot-img" />
            
            <div className="text-content">
                <h2>代币经济模型</h2>
                <p>
                    在 “WatchDoge” 项目里, 我们的任务是经济模型与策略, ... (rest of the text)
                </p>
            </div>
        </div>
    );
}

export default WatchDogeFlagSection;
