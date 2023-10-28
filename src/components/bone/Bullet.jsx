import React from 'react';

function Bullet({ title, description }) {
    return (
        <div className="bullet">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Bullet;
