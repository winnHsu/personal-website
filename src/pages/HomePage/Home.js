import React, { useState } from 'react';
import { Element, Link } from 'react-scroll';
import './Home.css'
import text_designer from "../../assets/designs/text_designer.png"
import text_developer from "../../assets/designs/text_developer.png"
import icon_sun from "../../assets/icons/icon_sun.png"
import About from '../AboutPage/About';
import TickerButton from '../../components/buttons/TickerButton';
import SpinningSun from '../../components/widgets/SpinningSun';

export default function Home() {
    return (
        <>
            <Element name="home">
                <div className="mainView">
                    <div className='titleLeft'>
                        <p className="textCreative">creative</p>
                        <img src={text_designer} alt="Description" className="textImage" />
                        <img src={text_developer} alt="Description" className="textImage" />
                    </div>
                    <div className='contentRight'>
                        <div className='titleRight'>
                            <SpinningSun />
                            <p className='textNow'>NOW</p>
                            <p className='textAvailable'>available for work</p>
                        </div>
                        <p className='textIntro'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HI, I AM WINN, A DEVELOPER AND UX/UI DESIGNER BASED IN NYC. I HAVE A STRONG BACKGROUND IN SOFTWARE ENGINEERING. I ENJOY RENAISSANCE ART AND MINIMAL DESIGN AESTHETICS. I LOVE TECHNOLOGY, NATURE, AND, OF COURSE, COLD PIZZA.</p>
                        <TickerButton text={"CONTACT ME"} marginBottom={"-11vh"} width={"246px"} linkTo={"work"} />
                    </div>
                </div>
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="work">
                Work Section
            </Element>
            <Element name="contact">
                Contact Section
            </Element>
        </>
    )
}
