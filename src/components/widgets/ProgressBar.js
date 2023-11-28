import React, { useState, useEffect } from 'react';

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    const updateProgressBar = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 96;
        setProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateProgressBar);
        return () => window.removeEventListener('scroll', updateProgressBar);
    }, []);

    const separatorStyle = {
        position: 'fixed',
        top: '67px',
        left: '2%',
        width: '96%',
        height: '1.5px',
        backgroundColor: 'gray',
        zIndex: 1001,
    };

    const progressBarStyle = {
        position: 'fixed',
        top: '67px',
        left: '2%',
        width: `${progress}%`,
        height: '1.5px',
        backgroundColor: 'white',
        zIndex: 1002,
    };

    return (
        <>
            <div style={separatorStyle}></div>
            <div style={progressBarStyle}></div>
        </>
    );
}