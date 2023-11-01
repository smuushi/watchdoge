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
                <Bullet title="Governance Rights" description="Token holders will have the right to participate in the governance decisions of the project." />
                <Bullet title="Incentive Mechanism" description="Tokens are used to reward community members for their contributions and participation." />
                <Bullet title="Payment Methods" description='In the "WatchDoge" ecosystem, tokens can be used to purchase services and goods.' />
                <Bullet title="Social Media & Content" description="Tokens will be used to reward community members for creating interesting memes and content." />
                <Bullet title="Philanthropy Commitment" description="A portion of the funds, ranging from 5% to 10%, will be earmarked for philanthropic causes. This commitment extends to supporting vulnerable communities, such as refugees and low-income families in urban areas. " />
                
                <FooterSection
                    headerText="How To Participate"
                    description="内容内容内容内容内容内容内容..."
                />
            </div>
        </div>
    );
}

export default BoneSection;
