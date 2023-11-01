import React from 'react';

function FeatureBox({ title, description }) {
    return (
        <div className="feature-box">
            <div className="feature-titles">
                {title.map((t, idx) => (
                    <h2 key={idx} className={`feature-title title-${idx}`}>{t}</h2>
                ))}
            </div>
            {Array.isArray(description) ? (
                <ul className="feature-description-list">
                    {description.map((desc, idx) => (
                        <li key={idx} className="feature-description">{desc}</li>
                    ))}
                </ul>
            ) : (
                <p className="feature-description">{description}</p>
            )}
        </div>
    );
}

export default FeatureBox;
