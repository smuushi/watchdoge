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
                        <h2>Tokenomics of WatchDoge (WDC$)</h2>

                    </div>

                    <div className='text-details'>
                        <section>
                            <h3> Token Details </h3>
                            <ul>
                                <li>Token Name: WatchDoge Coin (WDC$) </li>
                                <li>Total Supply: 10 billion WDC$ </li>
                                <li>Address: 0xC61f26685BF7dc3Df4Ece771552a490CD4b46cb6 </li>
                            </ul>
                        </section>

                        <section>
                            <h3> Token Distribution </h3>
                            <ul>
                                <li>Community Supply: 75% (7.5 billion WDC$)</li>
                                <li>Initial DEX Offering (IDO): 5% (500 million WDC$)</li>
                                <li>Airdrop: 10% (1 billion WDC$)</li>
                                <li>Marketing (MKT): 5% (500 million WDC$)</li>
                                <li>Reserved for Development: 4% (400 million WDC$)</li>
                                <li>Team: 1% (100 million WDC$)</li>
                            </ul>                                    
                            
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchDogeFlagSection;
