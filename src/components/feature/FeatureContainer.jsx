import React from 'react';
import FeatureBox from './FeatureBox';
import "./FeatureContainer.css"
import suitdogeImage from '../../assets/suitdoge.png'

function FeaturesContainer() {
    const features = [
        { 
            title: ['Phase 1', 'The Birth of a Pawsome Meme Legend', '(Q4 2023)'],
            description: [
                'WatchMeme DAO opens up our social channels – Twitter, Telegram, Discord, and more. You can join our lively meme discussions, participate in exciting contests and giveaways, and get to know the WatchMeme team through interactive AMAs.',
            ]
        },
        { 
            title: ['Phase 2', 'Crawling Towards Meme Supremacy', '(Q1 2024)'],
            description: [
                'WatchMeme marks a significant milestone by listing on a major decentralized exchange, initiates a loyalty-driven airdrop, aims to expand its community to 15k Guardians and achieve 5k holders, all while launching an influencer marketing blitz to amplify its reach and become the preferred memecoin for enthusiasts.'
            ]
        },
        { 
            title: ['Phase 3', 'Walking the Meme Path', '(Q2 2024)'],
            description: [
                'WatchMeme achieves a significant milestone with 10k holders, solidifying memecoin dominance, aims to unite a global community of 25k Guardians, and expresses gratitude through a second airdrop to loyal members.'
            ]
        },
        { 
            title: ['Phase 4', 'Running Towards Meme Mastery', '(Q3 2024)'],
            description: [
                'WatchMeme reaches a milestone with 20k holders, solidifying its position as a leading memecoin, introduces a voluntary donation initiative to spread meme joy while supporting noble causes, and unveils groundbreaking meme statistics, a ranking system, and a launchpad for nurturing and launching adorable memecoin projects into the meme galaxy.'
            ]
        }, 
        { 
            title: ['Phase 5', 'Jumping into Meme Supremacy', '(Q4 2024)'],
            description: [
                'WatchMeme reaches a commanding milestone of 50k holders, establishes memecoin dominance, expands its ecosystem with an NFT marketplace, collection, and game launch, hosts a Macbook giveaway for the community, and demonstrates social responsibility by donating $500,000 to rug pull victims, fostering positivity in the crypto landscape.'
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
