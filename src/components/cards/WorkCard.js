import React from 'react';

const WorkCard = ({ text1, text2, textImage, workImage, isLeft }) => {
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
        cursor: 'pointer',
        width: 'min-content',
    };

    const workDescriptionStyle = {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: '0vh',
        marginBottom: '0vh',
    };

    return (
        <div style={workCardContainerStyle}>
            <div>
                <img src={textImage} alt="Description" style={textMetromeshStyle} />
                <p style={workDescriptionStyle}>{text1}<br />{text2}</p>
            </div>
            <div style={{ marginRight: '4vh' }} />
            <img src={workImage} alt="Description" style={imageStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(0.987)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
    );
};

export default WorkCard;
