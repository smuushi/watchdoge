import React from 'react';
import watchdoge from '../../assets/watchdogeflag.png';
import background from '../../assets/background.png';
import './watchdogeflagsection.css'

function WatchDogeFlagSection() {
    return (
        <div className='flag-section'>
                <img src={background} alt="Background" className="background-img" />

            <div className="watchdoge-flag-section" id="tokenomics">
                <img src={watchdoge} alt="WatchDoge Mascot" className="mascot-img" />
                
                <div className="text-content">
                    <div>
                        <h2>Tokenomics of Watch Meme Coin</h2>

                    </div>

                    <div className='text-details'>
                        <section>
                            <h3> Token Details: </h3>
                            <ul>
                                <li>Token Name: WatchMeme Coin (WMC$) </li>
                                <li>Total Supply: 10 billion WMC$ </li>
                            </ul>
                        </section>

                        <section>
                            <h3> Token Distribution: </h3>
                            <ul>
                                <li>30%  - Community Rewards</li>
                                <li>25% - WatchMeme DAO</li>
                                <li>15% - Initial Liquidity</li>
                                <li>15% - CEX Liquidity</li>
                                <li>15% - Core Contributors</li>
                            </ul>                                    
                            
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchDogeFlagSection;
