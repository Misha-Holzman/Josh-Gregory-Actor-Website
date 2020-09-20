import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style.css'

class Homepage extends Component {
  render () {
    return (
      <div className='home-page-main-container'>
        <div className='home-page-content-container'>
          <img className='homepage-img-of-josh' src='https://i.imgur.com/NDw5Fzd.jpg' alt='' />
        </div>
        <a href='#real-jump-link' id='arrow-link'>
          <img
            src='https://i.imgur.com/ShY6qC4.png'
            className='arrow'
            alt=''
          />
        </a>
        <div className='homepage-alternate-background-color'>
          <h3 className='video-text' id='real-jump-link'>Featured Work</h3>
          <iframe
            src='https://www.youtube.com/embed/1TRt-KTi0R0'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            className='featured-WWE-video' />
          <p className='featured-WWE-video-text'>
            Maybe next time Mick Foley will keep his toenails to himself?
            Keep calm at the office and Brawl Without Limits when WWE 2K Battlegrounds lands on consoles on September 18th!
          </p>
          {/* <ReactPlayer
            url='https://vimeo.com/318350985' 
            id='player'
          /> */}
        </div>
      </div>
    )
  }
}

export default Homepage
