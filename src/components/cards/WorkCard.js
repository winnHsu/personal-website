import React, { useState } from 'react';
import IntroCard from './IntroCard';

const WorkCard = ({ text1, text2, textImage, workImage, isLeft, linkTo, text }) => {
    const [drop, setDrop] = useState(false);

    const handleClick = () => {
        setDrop(!drop);
    };

    const workCardContainerStyle = {
        display: 'flex',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        alignItems: 'center',
        marginTop: '2vh',
        marginBottom: '4vh',
        marginLeft: isLeft ? '5.3vw' : '12vw',
        width: 'min-content',
    };

    const imageStyle = {
        height: '34vh',
        width: 'min-content',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    };

    const textMetromeshStyle = {
        height: '15vh',
        width: 'min-content',
    };

    const workDescriptionStyle = {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: '0vh',
        marginBottom: '0vh',
    };

    const introCardContainerStyle = {
        position: 'fixed', /* Stay in place */
        zIndex: 1, /* Sit on top */
        left: 0,
        top: 0,
        width: '100%', /* Full width */
        height: '100%', /* Full height */
        overflow: 'auto', /* Enable scroll if needed */
        backgroundColor: '#000000E1',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div style={workCardContainerStyle} onClick={handleClick}>
            <div>
                <img src={textImage} alt="Description" style={textMetromeshStyle} />
                <p style={workDescriptionStyle}>{text1}<br />{text2}</p>
            </div>
            <div style={{ marginRight: '4vh' }} />
            <a href={linkTo} target="_blank" rel="noopener noreferrer">
                <img src={workImage} alt="Description" style={imageStyle}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(0.987)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
            <IntroCard style={introCardContainerStyle} drop={drop} text={text} />
        </div>
    );
};

export default WorkCard;