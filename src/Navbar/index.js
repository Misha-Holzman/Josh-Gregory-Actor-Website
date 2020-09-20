import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from '../Homepage'
import Reel from '../Reel'
import Credits from '../Credits'
import Images from '../Images'
import About from '../About'
import Media from '../Media'
import Contact from '../Contact'

import './style.css'

class Navbar extends Component {
  constructor () {
    super()
    this.state = {
      isChecked: false
    }
    this.handleChecked = this.handleChecked.bind(this)
    this.handleUncheck = this.handleUncheck.bind(this)
  }

  handleChecked () {
    document.getElementById('toggle').checked = true
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  handleUncheck () {
    document.getElementById('toggle').checked = false
    this.setState({
      isChecked: false
    })
  }

  render () {
    return (
      <Router>
        <div className='nav-container'>
          <div className='all-nav-items'>
            <div className='nav-bullets-div'>
              <ul className='nav-ul-container-left topBotomBordersOut'>
                <li className='nav-li-item'>
                  <Link className='nav-li-link' to='/about'><span className='link-span'>About</span></Link>
                </li>
                <li className='nav-li-item'>
                  <Link className='nav-li-link' to='/images'><span className='link-span'>Images</span></Link>
                </li>
                <li className='nav-li-item-media'>
                  <Link className='nav-li-link' to='/media'><span className='link-span'>Media</span></Link>
                </li>
              </ul>
              <div className='joshs-name-div'>
                <Link id='nav-li-link-title' to='/'>
                  <h1 className='josh-name-big'>
                    <span class='u-shadow'>JOSH GREGORY</span></h1>
                </Link>
              </div>
              <ul className='nav-ul-container-right topBotomBordersOut'>
                <li className='nav-li-item-reel'>
                  <Link className='nav-li-link' to='/reel'><span className='link-span'>Reel</span></Link>
                </li>
                <li className='nav-li-item'>
                  <Link className='nav-li-link' to='/credits'><span className='link-span'>Credits</span></Link>
                </li>
                <li className='nav-li-item'>
                  <Link className='nav-li-link' to='/contact'><span className='link-span'>Contact</span></Link>
                </li>
              </ul>
            </div>
            <div className='ham-div'>
              <label for='toggle' id='label'>&#9776;</label>
              <input
                type='checkbox'
                id='toggle'
                className='check1'
                onChange={this.handleChecked}
                onClick={
                  this.state.isChecked ? true : this.handleUncheck
                } />
              <div className='hidden-nav-container'>
                <div className='hidden-nav-bullets-div'>
                  <ul className='hidden-nav-ul-container-left topBotomBordersOut'>
                    <li className='hidden-nav-li-item' onClick={this.handleUncheck}>
                      <Link className='hidden-nav-li-link' to='/about'><span className='link-span'>About</span></Link>
                    </li>
                    <li className='hidden-nav-li-item' onClick={this.handleUncheck}>
                      <Link className='hidden-nav-li-link' to='/images'><span className='link-span'>Images</span></Link>
                    </li>
                    <li className='hidden-nav-li-item' onClick={this.handleUncheck}>
                      <Link className='hidden-nav-li-link' to='/media'><span className='link-span'>Media</span></Link>
                    </li>
                  </ul>
                  <ul className='hidden-nav-ul-container-right topBotomBordersOut'>
                    <li className='hidden-nav-li-item' onClick={this.handleUncheck}>
                      <Link className='hidden-nav-li-link' to='/reel'><span className='link-span'>Reel</span></Link>
                    </li>
                    <li className='hidden-nav-li-item' onClick={this.handleUncheck}>
                      <Link className='hidden-nav-li-link' to='/credits'><span className='link-span'>Credits</span></Link>
                    </li>
                    <li className='hidden-nav-li-item' onClick={this.handleUncheck}>
                      <Link className='hidden-nav-li-link' to='/contact'><span className='link-span'>Contact</span></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/images' component={Images} />
          <Route path='/reel' component={Reel} />
          <Route path='/media' component={Media} />
          <Route path='/credits' component={Credits} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default Navbar
