import React, { useState, useEffect, useRef } from 'react';
import './Cards.css'

const FlipCard = ({ text, award, image, cover }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [positionY, setPositionY] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const position = cardRef.current.getBoundingClientRect();
                setPositionY(position.y);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const buttonOutlineStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '58px',
        overflow: 'hidden',
        width: '44vw',
        zIndex: 10,
    };

    const textStyle = {
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '28px',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        marginTop: '0px',
    };

    const imageStyle = {
        height: '54px',
        marginRight: '10px',
    };

    const awardStyle = {
        fontFamily: 'Abril Fatface',
        color: '#EFDCC9',
        fontSize: '23px',
        marginTop: '0vh',
    }

    const textContainer = {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '0.5vh',
        height: '36px',
        width: '44vw',
        justifyContent: 'space-between',
    }

    const awardImage = {
        position: 'fixed',
        height: '288px',
        top: (positionY - 100) + 'px',
        right: '54vw',
        animation: isHovered ? 'fadeIn 1s, spin 1s' : 'none',
        animationFillMode: 'forwards',
        transformOrigin: 'right center',
        opacity: 0,
    }    

    return (
        <>
            <div
                ref={cardRef}
                style={buttonOutlineStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? (
                    <>
                        <img src={cover} alt={text} style={awardImage} />
                        <img src={image} alt={text} style={imageStyle} />
                    </>
                ) : (
                    <div style={textContainer}>
                        <p style={textStyle}>{text}</p>
                        <p style={awardStyle}>{award}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default FlipCard;
