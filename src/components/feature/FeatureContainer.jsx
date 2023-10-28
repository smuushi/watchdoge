import React from 'react';
import FeatureBox from './FeatureBox';
import "./FeatureContainer.css"
import suitdogeImage from '../../assets/suitdoge.png'

function FeaturesContainer() {
    const features = [
        { title: 'Feature 1', 
        description: 'Description for Feature 1 Description for Feature 1 Description for Feature 1 Description for Feature 1 Description for Feature 1 Description for Feature 1' },
        { title: 'Feature 2',
         description: 'Description for Feature 2 Description for Feature 2 Description for Feature 2 Description for Feature 2 Description for Feature 2 Description for Feature 2' },
        { title: 'Feature 3',
         description: 'Description for Feature 3 Description for Feature 3 Description for Feature 3 Description for Feature 3 Description for Feature 3 Description for Feature 3' },
        { title: 'Feature 4',
         description: 'Description for Feature 4 Description for Feature 4 Description for Feature 4 Description for Feature 4 Description for Feature 4 Description for Feature 4' }
    ];

    return (
        <div className='features-section'>
            <div className="features-container">
                <div className="header-tab">
                    <h2>header header header</h2>
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
