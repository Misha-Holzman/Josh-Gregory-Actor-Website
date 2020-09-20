import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render () {
    return (
      <div className='about-main-container'>
        <h3 className='about-title-text'>About me</h3>
        <div className='about-text-main-container'>
          <div className='about-img-container'>
            <img className='about-city-country-img' src='https://i.imgur.com/hrwePnK.png' alt='' />
          </div>
          <div className='about-text-container'>
            <p className='about-me-text'>
            I am a NYC based actor who hails from the finger lakes region of Upstate, NY. I am pursuing work in commercials, film, and theater. 
            I am currently involved with multiple acting studios in NYC, and on my way to social media influencer after hitting 300 followers…please inquire about product advertising. 😉
            </p>
            <p className='about-me-text'>
            From the beginning, I knew that I wanted to be an actor. I was that odd 6 year old with a wild imagination, the one whom was quite often caught speaking dialogue to himself, 
            playing both imaginary parts, while he should been taking a nap. What sealed the deal was getting cast in the local theater summer production of A midsummer Night’s Dream. 
            I was a non-speaking Puck #5. That’s right! Number 5 out of 10 nonspeaking pucks, with a cast of 57 local actors.
            </p>
            <p className='about-me-text'>I got my taste for comedy playing the role of Jacob Marley in an adaptation of A Christmas Carol. 
            The set was made up of 2x4’s and plywood, a deconstructed setting if you will. I was directed to climb a flight of stairs every night with long chains dragging behind me.
            With all the moaning and groaning involved with the character of Jacob Marley, I would without fail get my chains caught during my long journey from stage left to stage right. 
            Turning this to my advantage, I would inevitably get laughs from the audience every time I had to wrestle with the chains and figure out how to free myself. 
            It was a valuable lesson, as I learned how to react to my surroundings and how to work through obstacles.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
