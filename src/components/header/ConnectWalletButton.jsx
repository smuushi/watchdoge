import React from 'react';

// import githubicon from "../../assets/github-mark.png";
import xicon from "../../assets/tweeter.jpg";
import telegramicon from "../../assets/telgram.jpg";
import dcIcon from "../../assets/dc.jpg";
import mediaIcon from "../../assets/media.jpg";

function ConnectWalletButton({ isActive }) {
    return (
        <> 
            <ul className='externalLinks'>
                <li>
                    <a href="https://twitter.com/WatchMemeDAO">
                        <button className="githubSvg">
                            <img src={xicon} alt="xicon" />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/WatchMemeDAO">
                        <button className="githubSvg">
                            <img src={telegramicon} alt="telegram" />
                        </button>
                    </a>
                </li>
                {/* for next phase */}
                {/* <li>
                    <a href="https://watch-doge.gitbook.io/watchdogecoin-whitepaper/">
                        <button className="githubSvg">
                            <img src={dcIcon} alt="githubicon" />
                        </button>
                    </a>
                </li> */}
                <li>
                    <a href=" https://medium.com/@WatchMemeDAO">
                        <button className="githubSvg">
                            <img src={mediaIcon} alt="githubicon" />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://watch-doge.gitbook.io/watchdogecoin-whitepaper/">
                        <button className={`connect-wallet ${isActive ? 'active' : ''}`}>
                            White Paper
                        </button>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default ConnectWalletButton;
