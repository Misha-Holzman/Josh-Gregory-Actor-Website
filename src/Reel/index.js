import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style.css'

class Reel extends Component {
  render () {
    return (
      <div className='reel-main-container'>
        <div className='reel-content-container-div'>
          <h3 className='reel-title' id='real-jump-link'>Reel</h3>
          <iframe
            src='https://player.vimeo.com/video/285012728'
            width='640'
            height='360'
            frameborder='0'
            allow='autoplay; fullscreen'
            allowfullscreen 
            className='reel-video'
          />
        </div>
      </div>
    )
  }
}

export default Reel
