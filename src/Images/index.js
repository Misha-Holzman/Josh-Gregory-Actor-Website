import React, { Component } from 'react'
import './style.css'

class Images extends Component {
  render () {
    return (
      <div className='images-main-container'>
        <h1 className='headshots-header-text'>Headshots</h1>
        <div className='images-content-container'>
          <img className='images-tab-imgs-of-josh' id='myImg' src='https://i.imgur.com/QIwwtaf.jpg' onClick={this.handleClick} alt='' />
          <img className='images-tab-imgs-of-josh' src='https://i.imgur.com/KZbVLiy.jpg' alt='' />
          <img className='images-tab-imgs-of-josh' src='https://i.imgur.com/dmY2jyp.jpg' alt='' />
          <img className='images-tab-imgs-of-josh' src='https://i.imgur.com/pNjSvHc.jpg' alt='' />
          <img className='images-tab-imgs-of-josh' src='https://i.imgur.com/SmbNA2A.jpg' alt='' />
          <img className='images-tab-imgs-of-josh' src='https://i.imgur.com/iYHMwjD.jpg' alt='' />
          <img className='images-tab-imgs-of-josh' src='https://i.imgur.com/qK5ffQj.jpg' alt='' />
          <img className='images-tab-imgs-of-josh' id='images-tab-imgs-of-josh-last' src='https://i.imgur.com/lBcgmUl.jpg' alt='' />
        </div>
        <div className='headshots-credit-div'>
          <h6 className='headshots-giving-credit-text'>Headshots by <a href='http://www.davidnoles.com/' target='_blank' className='link-to-headshot-guy'>David Noles Photography</a></h6>
        </div>
      </div>
    )
  }
}

export default Images
