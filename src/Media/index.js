import React, { Component } from 'react'
import './style.css'

class Media extends Component {
  render () {
    return (
      <div className='media-main-container'>
        <h1 className='media-header-text'>Media</h1>
        <div className='media-content-container'>
          <iframe
            src='https://www.youtube.com/embed/1TRt-KTi0R0'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            className='featured-WWE-video-media' />
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/695n38c.png' alt='' />
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/MP5HeMD.png' alt='' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/q22SvcL.jpg' alt='' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/pJbEz7B.png' alt='' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/45LXsua.png' alt='' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/8hKI2e0.png' alt='' />
          <img className='media-tab-imgs-of-josh-small' src='https://i.imgur.com/4JOJysG.png' alt='' />
          <img className='media-tab-imgs-of-josh' src='https://i.imgur.com/CuUDmBc.png' alt='' />
        </div>
      </div>
    )
  }
}

export default Media
