import React, { useState } from 'react';
import { Link } from 'react-scroll';

const TickerButton = ({ text, marginBottom, width, linkTo, isNormal }) => {
    // Width per character: 22, per space: 11, margin-left-right: 18
    const [isHovered, setIsHovered] = useState(false);

    const buttonOutlineStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: '50px',
        backgroundColor: isNormal ? '#00000000' : '#F4EEE7',
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
        color: isNormal ? '#F4EEE7' : '#131313',
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
                {(linkTo === 'work' || linkTo === 'home' || linkTo === 'about' || linkTo === 'contact') ?
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
                    :
                    <a
                        className={`buttonText ${isHovered ? 'animate' : ''}`}
                        style={isHovered ? { ...buttonTextStyle, ...animateStyle } : buttonTextStyle}
                        href={linkTo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {isHovered ? `${text} ${text} ${text} ${text} ${text}` : text}

                    </a>
                }
            </div>
        </>
    );
};

export default TickerButton;
