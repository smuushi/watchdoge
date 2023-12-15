import React from 'react';
import BoneHeader from './BoneHeader';
import Bullet from './Bullet';
import FooterSection from './FooterSection';
import "./BoneSection.css"

function BoneSection() {
    return (
        <div className='bone-container'>
            <div className="bone-section">
                <div className='bullet-header'>
                    <BoneHeader text="The Role of Token" />

                </div>

               
                
                {/* List of Bullets */}
                {/* Sample Bullet, repeat for each item */}
                <Bullet title="Governance Rights" description="Token holders get to make big decisions about the future of WatchMeme, like a pack of puppies deciding on the best playtime." />
                <Bullet title="Incentive Mechanism" description="We'll shower our community members with tokens for their paw-tastic contributions and participation, making it as fun as chasing a laser pointer!" />
                <Bullet title="Payment Methods" description='You can use your WatchMeme tokens to buy all sorts of goodies within the WatchMeme ecosystem, like exclusive meme packs and special merch.' />
                <Bullet title="Social Media & Content" description="We'll reward our community members with tokens for creating the most paw-some memes and content, making the memeverse a brighter, funnier place!" />
                <Bullet title="Philanthropy Commitment" description="We're dedicated to giving back to society and supporting vulnerable communities. A portion of the funds will be donated to help those in need, making the world a happier place, one furry friend at a time!" />
                
                <FooterSection
                    headerText="How To Participate"
                    description="内容内容内容内容内容内容内容..."
                />
            </div>
        </div>
    );
}

export default BoneSection;
