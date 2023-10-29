import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './Home';
import WIP from './components/_misc/WIP';  // import the WIP component

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<WIP />} /> 
            </Routes>
        </Router>
    );
}

export default App;
