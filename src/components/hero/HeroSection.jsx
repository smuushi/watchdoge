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
                    Welcome to Watch Meme DAO! 
                    </h1>
                    <p className="hero-description">
                    WatchMeme DAO is your one-stop platform for all things meme-tastic, from the latest news to epic discussions and a thriving meme community. 
                    </p>
                </div>
                <img src={herodogeImage} alt="Superhero Dog" className="hero-image" />
            </div>
        </div>
    );
};


export default HeroSection;
