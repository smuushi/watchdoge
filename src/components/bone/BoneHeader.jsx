import React from 'react';
import boneBackground from '../../assets/bonebackground.png';

function BoneHeader({ text }) {
    return (
        <div className="bone-header">
            {/* <img src={boneBackground} alt="bonebackground" /> */}
            <p>
                {text} 
            </p>
            <section>
            The $WatchMeme token is the paw-some heart of the WatchMeme ecosystem. It has these perfect features:
            </section>
        </div>
    );
}

export default BoneHeader;
