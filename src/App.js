import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/HomePage/Home';
import Header from './components/Header/Header';
import ProgressBar from './components/widgets/ProgressBar';
import BackgroundOverlay from './components/widgets/BackgroundOverlay';
import background_home from './assets/backgrounds/background_home.png';

function App() {
  const [backgroundFixed, setBackgroundFixed] = useState(false);

  const handleScroll = () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    setBackgroundFixed(scrollPercentage >= 0.03);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appStyle = {
    height: '560vh',
    textAlign: 'center',
    fontFamily: "'Arimo', sans-serif",
    backgroundImage: `url(${background_home})`,
    backgroundSize: backgroundFixed ? 'cover' : 'contain',
    backgroundPosition: backgroundFixed ? 'bottom' : 'top',
    paddingTop: '60px',
    position: 'relative',
    backgroundAttachment: backgroundFixed ? 'fixed' : 'scroll'
  };

  return (
    <div className="App" style={appStyle}>
      <BackgroundOverlay>
        <Header />
        <ProgressBar />
        <Home />
      </BackgroundOverlay>
    </div>
  );
}

export default App;