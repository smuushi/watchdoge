import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import HeroSection from './components/hero/HeroSection'
import WhyWatchDoge from './components/whywatchdoge/WhyWatchDoge'
import FeaturesContainer from './components/feature/FeatureContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <WhyWatchDoge />
      <FeaturesContainer />
    </>
  )
}

export default App
