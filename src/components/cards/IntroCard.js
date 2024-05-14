import React, { useEffect } from 'react';
import './Cards.css';

const IntroCard = ({ style, drop, text }) => {
    useEffect(() => {
        if (drop) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Clean up function to ensure overflow style is reset when the component unmounts or `drop` is false
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [drop]); // Add `drop` to the dependency array

    if (drop) {
        return (
            <div style={style}>
                <p className='introText'>
                    {text}
                </p>
            </div>
        );
    }
    return null;
};

export default IntroCard;