import React from 'react';
import './HeroSection.css';
import herodogeImage from "../../assets/herodoge.png";
import cloudImage from '../../assets/singlecloud.png';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className="hero">
                <img src={cloudImage} alt="Cloud Background" className="cloud-image" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome To Web3's Watchdoge!
                    </h1>
                    <p className="hero-description">
                        Web3 Watchdoge is the mysterious superhero in the digital world! Our mission is to guard the digital universe and let every project know: if you plan to do bad things, we will become your worst nightmare.
                    </p>
                </div>
                <img src={herodogeImage} alt="Superhero Dog" className="hero-image" />
            </div>
        </div>
    );
};


export default HeroSection;
