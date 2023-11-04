import React from 'react';

function ConnectWalletButton({ isActive }) {
    return (
        <a href="https://watch-doge.gitbook.io/watchdogecoin-whitepaper/">
            <button className={`connect-wallet ${isActive ? 'active' : ''}`}>
                White Paper
            </button>
        </a>
    );
}

export default ConnectWalletButton;
