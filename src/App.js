import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/HomePage/Home';
import Header from './components/Header/Header';
import ProgressBar from './components/widgets/ProgressBar';
import background_home from './assets/backgrounds/background_home.png';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isBackgroundFixed, setIsBackgroundFixed] = useState(false);

  useEffect(() => {
    const imageRatio = 0.57497; // Height/Width ratio of the image
    const handleScroll = () => {
      const position = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const imageHeight = windowWidth * imageRatio; // Calculate image height based on its ratio and window width

      // Check if the bottom of the image is at or above the bottom of the screen
      if (position + windowHeight >= imageHeight) {
        setIsBackgroundFixed(true);
      } else {
        setIsBackgroundFixed(false);
      }

      const scrollPercentage = (position / (document.documentElement.scrollHeight - windowHeight)) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    if (scrollPosition < 10 || scrollPosition > 85) {
      return 'transparent';
    } else if (scrollPosition < 20) {
      const opacity = (scrollPosition - 10) / 10;
      return `rgba(0, 0, 0, ${opacity})`;
    } else if (scrollPosition > 75) {
      const opacity = (85 - scrollPosition) / 10;
      return `rgba(0, 0, 0, ${opacity})`;
    } else {
      return 'rgba(0, 0, 0, 1)';
    }
  };

  const blackBackgroundStyle = {
    backgroundColor: getBackgroundColor(),
    transition: 'background-color 0.3s',
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: "'Arimo', sans-serif",
    backgroundImage: `url(${background_home})`,
    backgroundSize: isBackgroundFixed ? 'cover' : 'contain',
    backgroundAttachment: isBackgroundFixed ? 'fixed' : 'scroll',
    backgroundPosition: isBackgroundFixed ? 'bottom' : 'top',
    paddingTop: '60px',
    position: 'relative',
  };

  return (
    <div style={appStyle}>
      <div style={blackBackgroundStyle}>
        <Header />
        <ProgressBar />
        <Home />
      </div>
    </div>
  );
}


export default App;
