import React from 'react'
import './Contact.css'
import text_connect from '../../assets/designs/text_connect.png'
import text_lets from '../../assets/designs/text_lets.png'
import TickerButton from '../../components/buttons/TickerButton'

export default function Contact() {
    return (
        <div className='contactPage'>
            <div className='firstPart'>
                <img src={text_lets} alt="Description" className="textConnect" />
                <div>
                    <p className='textTalkAbout'>WE CAN TALK ABOUT</p>
                    <div className='topicBox' style={{ marginLeft: '12vw', width: '970px' }}>
                        <TickerButton text={"FRONTEND DEVELOPMENT"} marginBottom={"0vh"} width={"468px"} linkTo="mailto:ch4374@nyu.edu?subject=Let's%20Talk%20Frontend:%20Where%20Design%20Meets%20Function" isNormal={true} />
                        <TickerButton text={"FULLSTACK DEVELOPMENT"} marginBottom={"0vh"} width={"479px"} linkTo="mailto:ch4374@nyu.edu?subject=Fullstack%20Chat:%20From%20Frontend%20to%20Backend%20and%20Everything%20In-Between" isNormal={false} />
                    </div>
                    <div className='topicBox' style={{ marginLeft: '8vw', width: '996px' }}>
                        <TickerButton text={"UI/UX DESIGN"} marginBottom={"0vh"} width={"255px"} linkTo="mailto:ch4374@nyu.edu?subject=Designing%20Dreams:%20UI/UX%20Magic%20Wand%20at%20the%20Ready" isNormal={false} />
                        <TickerButton text={"MOBILE APP DEVELOPMENT"} marginBottom={"0vh"} width={"487px"} linkTo="mailto:ch4374@nyu.edu?subject=App%20Talk:%20Let's%20Build%20Something%20for%20Those%20Small%20Screens" isNormal={true} />
                        <TickerButton text={"STARTUPS"} marginBottom={"0vh"} width={"208px"} linkTo="mailto:ch4374@nyu.edu?subject=Startup%20SOS:%20Seeking%20Tech%20Helper" isNormal={true} />
                    </div>
                    <div className='topicBox' style={{ marginLeft: '18vw' }}>
                        <TickerButton text={"WHY ENGINEERS ALWAYS EAT COLD PIZZA?"} marginBottom={"0vh"} width={"740px"} linkTo="mailto:ch4374@nyu.edu?subject=WHY%20ENGINEERS%20ALWAYS%20EAT%20COLD%20PIZZA%20?" isNormal={false} />
                    </div>
                </div>
            </div>
            <div className='secondPart'>
                <img src={text_connect} alt="Description" className="textConnect" />
                <div className='footer'>
                    <div className='contactBar'>
                        <p>WORRYING ABOUT SOMETHING?</p>
                        <TickerButton text={"CONTACT ME"} marginBottom={"0vh"} width={"245px"} linkTo="mailto:ch4374@nyu.edu?subject=Knock%20Knock,%20from%20the%20website%20!" isNormal={false} />
                    </div>
                    <div className='contactInfo'>
                        <a href="https://www.linkedin.com/in/winn-hsu/" target="_blank" rel="noopener noreferrer" className='contactInfoText'>LinkedIn</a>
                        <a href="https://github.com/winnHsu" target="_blank" rel="noopener noreferrer" className='contactInfoText'>GitHub</a>
                        <a href="mailto:ch4374@nyu.edu?subject=Knock%20Knock,%20from%20the%20website%20!" className='contactInfoText'>Email Me</a>
                        <a href="https://www.linkedin.com/in/winn-hsu/" className='contactInfoText'>Credits</a>
                        <a href="https://www.linkedin.com/in/winn-hsu/" className='contactInfoText'>More...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}