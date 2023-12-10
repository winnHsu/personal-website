import React from 'react'
import './Work.css'
import SpinningSun from '../../components/widgets/SpinningSun'
import WorkCard from '../../components/cards/WorkCard'
import text_metromesh from '../../assets/designs/text_metromesh.png'
import text_carpass from '../../assets/designs/text_carpass.png'
import text_honored from '../../assets/designs/text_honored.png'
import text_learn from '../../assets/designs/text_learn.png'
import text_olympiad from '../../assets/designs/text_olympiad.png'
import text_computergame from '../../assets/designs/text_computergame.png'
import text_aigame from '../../assets/designs/text_aigame.png'
import text_professionals from '../../assets/designs/text_professionals.png'
// import text_bark from '../../assets/designs/text_bark.png'
import text_chitchat from '../../assets/designs/text_chitchat.png'
// import background_bark from '../../assets/backgrounds/background_bark.jpg'
import background_chitchat from '../../assets/backgrounds/background_chitchat.jpg'
import background_carpass from '../../assets/backgrounds/background_carpass.jpg'
import background_metromesh from '../../assets/backgrounds/background_metromesh.jpg'
import TickerButton from '../../components/buttons/TickerButton'
import FlipCard from '../../components/cards/FlipCard'
import award_co from '../../assets/designs/award_co.png'
import award_aig from '../../assets/designs/award_aig.png'
import award_cgt from '../../assets/designs/award_cgt.png'


export default function Work() {
    return (
        <div className='workPage'>
            <div className='workTitle'>
                <SpinningSun />
                <p className='workTitleText'>SELECTED WORKS</p>
            </div>
            <WorkCard text1={"FULLSTACK  WEBSITE/APP DEVELOPMENT"} text2="UX/UI DESIGN" textImage={text_metromesh} workImage={background_metromesh} isLeft={true} />
            <WorkCard text1="FULLSTACK APP DEVELOPMENT" text2="UX DESIGN" textImage={text_chitchat} workImage={background_chitchat} isLeft={false} />
            <WorkCard text1="APP DEVELOPMENT" text2="UI DESIGN" textImage={text_carpass} workImage={background_carpass} isLeft={true} />
            <div className='workSecondPart'>
                <div className='workTitleLeft'>
                    <img src={text_honored} alt="Description" className="textHonored" />
                    <img src={text_learn} alt="Description" className="textHonored" />
                    <img src={text_professionals} alt="Description" className="textHonored" />
                    <p className='textLove'>& I love competition</p>
                </div>
                <div className='workTitleRight'>
                    <TickerButton text={"SEE MORE"} marginBottom={"17.5vh"} width={"223px"} linkTo="https://www.linkedin.com/in/winn-hsu/" isNormal={true} />
                    <div style={{ marginTop: '-60px' }}>
                        <FlipCard text={'THE COMPUTER OLYMPIAD'} award={'BRONZE MEDAL'} image={text_olympiad} cover={award_co}/>
                        <FlipCard text={'AI GAMING TOURNAMENT'} award={'GOLD MEDAL'} image={text_aigame} cover={award_aig}/>
                        <FlipCard text={'COMPUTER GAME TOURNAMENT'} award={'SILVER MEDAL'} image={text_computergame} cover={award_cgt}/>
                    </div>
                    <div className='workButtons'>
                        <p className='textKnowMore'>Know more<br />about me</p>
                        <TickerButton text={"CAREER PATH"} marginBottom={"0vh"} width={"267px"} linkTo="https://www.linkedin.com/in/winn-hsu/" isNormal={false} />
                        <TickerButton text={"EDUCATION"} marginBottom={"0vh"} width={"226px"} linkTo="https://www.linkedin.com/in/winn-hsu/" isNormal={false} />
                    </div>
                </div>
            </div>
        </div >
    )
}