import React from 'react';

import githubicon from "../../assets/github-mark.png";
import xicon from "../../assets/x-black.png";
import telegramicon from "../../assets/telegram.png";


function ConnectWalletButton({ isActive }) {
    return (
        <> 
            <ul className='externalLinks'>
                <li>
                    <a href="https://watch-doge.gitbook.io/watchdogecoin-whitepaper/">
                        <button className="githubSvg">
                            <img src={xicon} alt="xicon" />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://watch-doge.gitbook.io/watchdogecoin-whitepaper/">
                        <button className="githubSvg">
                            <img src={telegramicon} alt="telegram" />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://watch-doge.gitbook.io/watchdogecoin-whitepaper/">
                        <button className="githubSvg">
                            <img src={githubicon} alt="githubicon" />
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
