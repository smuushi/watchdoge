import React from 'react';
import boneBackground from '../../assets/bonebackground.png';

function BoneHeader({ text }) {
    return (
        <div className="bone-header" style={{ backgroundImage: `url(${boneBackground})` }}>
            {text}
        </div>
    );
}

export default BoneHeader;
