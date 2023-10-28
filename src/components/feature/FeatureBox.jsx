import React from 'react';

function FeatureBox({ title, description }) {
    return (
        <div className="feature-box">
            <h2 className="feature-title">{title}</h2>
            <p className="feature-description">{description}</p>
        </div>
    );
}

export default FeatureBox;
