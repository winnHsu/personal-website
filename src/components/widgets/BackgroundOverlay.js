import React, { useState, useEffect } from 'react';

const BackgroundOverlay = ({ children }) => {
    const [opacity, setOpacity] = useState(0);

    const handleScroll = () => {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (scrollPercentage < 0.1) {
            setOpacity(0);
        } else if (scrollPercentage < 0.2) {
            setOpacity((scrollPercentage - 0.1) * 10);
        } else if (scrollPercentage < 0.7) {
            setOpacity(1);
        } else if (scrollPercentage < 0.8) {
            setOpacity(1 - (scrollPercentage - 0.7) * 10);
        } else {
            setOpacity(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `rgba(19, 19, 19, ${opacity})`, // Using RGBA for background color
        zIndex: 0,
    };

    return (
        <div style={overlayStyle}>
            {children}
        </div>
    );
};

export default BackgroundOverlay;