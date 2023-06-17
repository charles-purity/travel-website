import React from 'react'
import { Button } from './Button'
import './LandingSection.css';
import '../App.css';

function LandingSection() {
  return (
    <div className='landing-container'>
        <video src ="/videos/video-1.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>

        <div className="landing-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED</Button>
        </div>
        <div className="landing-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div> 
    </div>
  )
}

export default LandingSection;