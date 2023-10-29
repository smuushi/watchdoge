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
                    <BoneHeader text="骨骼的力量" />

                </div>

               
                
                {/* List of Bullets */}
                {/* Sample Bullet, repeat for each item */}
                <Bullet title="代币经济" description="WDC 代币运作原则的解释..." />
                <Bullet title="代币经济sdf" description="WDC 代币运作原则的解释..." />

                
                <FooterSection
                    headerText="证券套保"
                    description="内容内容内容内容内容内容内容..."
                />
            </div>
        </div>
    );
}

export default BoneSection;
