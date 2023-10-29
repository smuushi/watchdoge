import { useState } from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import WhyWatchDoge from './components/whywatchdoge/WhyWatchDoge';
import FeaturesContainer from './components/feature/FeatureContainer';
import WatchDogeFlagSection from './components/watchdogeflag/WatchDogeFlagSection';
import BoneSection from './components/bone/BoneSection';

function Home() {
    const [count, setCount] = useState(0); // If you don't use this state, you can remove it

    return (
        <>
            <HeroSection />
            <WhyWatchDoge />
            <FeaturesContainer />
            <WatchDogeFlagSection />
            <BoneSection />
        </>
    );
}

export default Home;
