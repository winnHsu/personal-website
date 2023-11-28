import React, { useState, useEffect } from 'react';
import './About.css';
import text_hello from '../../assets/designs/text_hello.png';
import design_head3d from '../../assets/designs/design_head3d.gif';
import text_notme from '../../assets/designs/text_notme.png'

export default function About() {
    const [head3dOpacity, setHead3dOpacity] = useState(0);

    const handleScroll = () => {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        setHead3dOpacity(scrollPercentage >= 0.22 ? 1 : 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='aboutPage'>
            <div className='aboutContainer'>
                <img src={text_hello} alt="Description" className="textHello" />
                <p className='textName'>Winn Hsu</p>
                <p className='textAbout'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I USE MY SKILLS AND PASSION TO BUILD INNOVATIVE DIGITAL SOLUTIONS. ENRICHED BY NYU EDUCATION, MY JOURNEY HAS HONED MY SKILLS IN FULL-STACK WEB AND MOBILE APP DEVELOPMENT AND DESIGN. MY EXPERIENCE SPANS WORKING WITH STARTUPS, BIG CORPORATIONS, AND INDIVIDUALS, CREATING BLUEPRINTS FOR DIGITAL BUSINESSES, IMPROVING EFFICIENCY, AND LEARNING NEW THINGS!
                </p>
                <p className='textAbout'>
                    - SECOND-YEAR GRAD STUDENT AT NYU.<br />- FIGMA LOVER CRAFTING PIXEL-PERFECT DESIGN.<br />- FULL-STACK SOFTWARE DEVELOPER SPECIALIZING IN REACT FRAMEWORK.
                </p>
                <div>
                    <img src={text_notme} alt="Description" className="textNotMe" />
                    <p className='textStatue'>Liberty Santa</p>
                </div>
            </div >
            <img
                src={design_head3d}
                alt="Description"
                className="designHead3d"
                style={{ opacity: head3dOpacity, transition: 'opacity 1s ease-in' }}
            />
        </div>
    );
}
