import React, { useState, useEffect } from 'react';
import icon_sun from "../../assets/icons/icon_sun.png";

const SpinningSun = () => {
    const [rotationDegrees, setRotationDegrees] = useState(0);

    const handleScroll = () => {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const degrees = scrollPercentage * 3600;
        setRotationDegrees(degrees);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sunStyle = {
        width: 'auto',
        height: '64px',
        transform: `rotate(${rotationDegrees}deg)`,
        transition: 'transform 0.2s linear'
    };

    return <img src={icon_sun} alt="Sun Icon" style={sunStyle} />;
};

export default SpinningSun;
