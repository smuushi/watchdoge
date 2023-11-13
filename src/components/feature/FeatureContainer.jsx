import React from 'react';
import FeatureBox from './FeatureBox';
import "./FeatureContainer.css"
import suitdogeImage from '../../assets/suitdoge.png'

function FeaturesContainer() {
    const features = [
        { 
            title: ['Phase 1', 'Ignition'],
            description: [
                'Launch of the official WatchDoge website and comprehensive whitepaper.',
                'Activation of official social media channels on Twitter and Telegram for community engagement.'
            ]
        },
        { 
            title: ['Phase 2', 'Loyalty Rewards'],
            description: [
                'Community Airdrop events to reward early backers and distribute WatchDoge tokens.'
            ]
        },
        { 
            title: ['Phase 3', 'Market Footprint'],
            description: [
                'Launch of WatchDoge token trading on decentralized platforms.',
                'Goal: Achieve 2000+ WatchDoge token holders through referral programs and community challenges.',
                'Efforts to secure WatchDoge listings on key crypto platforms.'
            ]
        },
        { 
            title: ['Phase 4', 'Network Expansion'],
            description: [
                'Forge strategic partnerships with leading crypto projects to bolster WatchDoge ecosystem.',
                'Outreach for WatchDoge listings on top-tier centralized exchanges.',
                'Introduce the WatchDoge Toolkit - a collection of tools for community and developer engagement.'
            ]
        }
    ];
    

    return (
        <div className='features-section' id="roadmap">
            <div className="features-container">
                <div className="header-tab">
                    <h2>Roadmap</h2>
                    <div className="image-container">
                        <img src={suitdogeImage} alt="Suit Image" />
                    </div>
                </div>
                <div className="content">
                    <div className="features-list">
                        {features.map((feature, index) => (
                            <FeatureBox key={index} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FeaturesContainer;
