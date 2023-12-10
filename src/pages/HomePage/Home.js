import React from 'react';
import { Element } from 'react-scroll';
import './Home.css'
import text_designer from "../../assets/designs/text_designer.png"
import text_developer from "../../assets/designs/text_developer.png"
import About from '../AboutPage/About';
import TickerButton from '../../components/buttons/TickerButton';
import SpinningSun from '../../components/widgets/SpinningSun';
import Work from '../WorkPage/Work';
import ScrollingImage from '../../components/widgets/ScrollingImage';
import text_skills from '../../assets/designs/text_skills.png'
import Contact from '../ContactPage/Contact';

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
                        <TickerButton text={"CONTACT ME"} marginBottom={"-11vh"} width={"245px"} linkTo="contact" isNormal={true} />
                    </div>
                </div>
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="work">
                <Work />
            </Element>
            <ScrollingImage src={text_skills} />
            <Element name="contact">
                <Contact/>
            </Element>
        </>
    )
}
