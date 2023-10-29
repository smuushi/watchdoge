import React from 'react';
import boneBackground from '../../assets/bonebackground.png';

function BoneHeader({ text }) {
    return (
        <div className="bone-header">
            <img src={boneBackground} alt="bonebackground" />
            <p>
                {text}
            </p>
        </div>
    );
}

export default BoneHeader;
