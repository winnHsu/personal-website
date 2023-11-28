import React, { useState } from 'react';
import { Link } from 'react-scroll';

const TickerButton = ({ text, marginBottom, width, linkTo }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonOutlineStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: '50px',
        borderRadius: '50px',
        borderWidth: '1.5px',
        borderColor: '#F4EEE7',
        borderStyle: 'solid',
        overflow: 'hidden',
        zIndex: 10,
        marginBottom: marginBottom,
    };

    const buttonTextStyle = {
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#F4EEE7',
        fontWeight: 'bold',
        fontSize: '32px',
        whiteSpace: 'nowrap',
        borderRadius: '50px',
    };

    const animateStyle = {
        animation: 'ticker 5s linear infinite',
    };

    const tickerKeyframes = `
        @keyframes ticker {
            0% {
                transform: translateX(-40%);
            }
            100% {
                transform: translateX(40%);
            }
        }
    `;

    return (
        <>
            <style>{tickerKeyframes}</style>
            <div
                className="buttonOutline"
                style={buttonOutlineStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link
                    className={`buttonText ${isHovered ? 'animate' : ''}`}
                    style={isHovered ? { ...buttonTextStyle, ...animateStyle } : buttonTextStyle}
                    activeClass="active"
                    to={linkTo}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                    {isHovered ? `${text} ${text} ${text} ${text} ${text}` : text}
                </Link>
            </div>
        </>
    );
};

export default TickerButton;
