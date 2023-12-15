import React from 'react';
import rocket from '../../assets/rocket.png';
import BoneHeader from './BoneHeader';

function FooterSection({ headerText, description }) {
    return (
        <div className="footer-section">
            <div>
                <h1>{headerText}</h1>
                <h6 className='footer-caption'>Follow Us Everywhere</h6>
                <p className="footer-description">We'll send you meme analysis, the hottest meme of the week, and "blacklist" tips for avoiding those cringe ones.</p>

                <h6 className='footer-caption'>Join Our Cozy Community</h6>
                <p className="footer-description">Share your creations, get insights from other meme masters, and make some new friends along the way.</p>

                <h6 className='footer-caption'>Invite Your Friends</h6>
                <p className="footer-description">The more the merrier, and the more memes the better!  Share the laughter and let's build the friendliest & most informative meme community ever. </p>


                <h6 className='footer-caption'>Engage In Activities</h6>
                <p className="footer-description">Join epic events & contests, mind-bending challenges, and meme-tastic collab campaigns that'll boost your token to the moon!</p>

                <h6 className='footer-caption'>Stay Tuned for Everything</h6>
                <p className="footer-description">Token launch dates, treat schedules, and everything you need to be wallet-ready! We'll keep you updated on all the exciting stuff, so you don't miss a beat.</p>

            </div>
            <div>
                <img src={rocket} alt="Rocket" className="rocket-img" />
            </div>
        </div>
    );
}

export default FooterSection;
