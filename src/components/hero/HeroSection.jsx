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
                    <h1 className="hero-title">欢迎来到 <br/>   
                    Web3 Watchdoge！</h1>

                    <p className="hero-description">Some descrdfdfiption text here...</p>

                </div>
                <img src={herodogeImage} alt="Superhero Dog" className="hero-image" />
            </div>
        </div>
    );
};


export default HeroSection;
