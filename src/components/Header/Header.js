import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
    const [blurEffect, setBlurEffect] = useState(0);

    const handleScroll = () => {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (scrollPercentage > 0.1) {
            setBlurEffect(10);
        } else if (scrollPercentage > 0.05) {
            setBlurEffect(10 * (scrollPercentage - 0.05) * 10);
        } else {
            setBlurEffect(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="container" style={{ backdropFilter: `blur(${blurEffect}px)` }}>
            <div className="headerLeft">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={1000} className="name">Winn Hsu</Link>
                <p className="title">FULL-STACK DEVELOPER, UI/UX DESIGNER</p>
            </div>
            <nav className="nav-links">
                <Link activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={1000}>Works</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1000}>About</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={1000}>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;