import React, { useState } from 'react';

const ScrollingImage = ({ src }) => {
    const [isPaused, setIsPaused] = useState(false);

    const scrollingImageContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        marginTop: '2vh',
        marginBottom:'10vh',
        borderBottomWidth: '1px',
        borderColor: '#F4EEE7',
        borderBottomStyle: 'solid',
        // backgroundColor: 'blue',
        height: '19vh'
    };

    const imageContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        whiteSpace: 'nowrap',
        animation: `scrollImage 15s linear infinite ${isPaused ? 'paused' : 'running'}`,
    };

    const imageStyle = {
        height: '10vh',
        marginRight: '25px',
    };

    const textStyle = {
        fontFamily: 'Abril Fatface',
        color: '#EFDCC9',
        fontSize: '22.8px',
        marginRight: '8.5vw', 
        marginBottom: '2vh',
        alignSelf: 'flex-end'
    }

    const keyframesStyle = `
        @keyframes scrollImage {
            from {
                transform: translateX(0%);
            }
            to {
                transform: translateX(-154%);
            }
        }
    `;

    return (
        <div style={scrollingImageContainerStyle} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <p style={textStyle}>And the programming stuff</p>
            <style>{keyframesStyle}</style>
            <div style={imageContainerStyle}>
                <img src={src} alt="Scrolling" style={imageStyle} />
                <img src={src} alt="Scrolling" style={imageStyle} />
            </div>
        </div>
    );
};

export default ScrollingImage;
