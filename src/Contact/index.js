import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact-main-container'>
        <p className='contact-title'>Contact me</p>
        <div className='social-container'>
          <ul className='social-icons'>
            <li className='li-social'>
              <a href='https://www.instagram.com/josh.michael.gregory/' target='_blank' className='a-social' rel='noopener' >
                <i className='fa fa-instagram' />
              </a>
            </li>
            <li className='li-social'>
              <a href='https://www.facebook.com/joshua.gregory.144' target='_blank' className='a-social' rel='noopener' >
                <i className='fa fa-facebook' />
              </a>
            </li>
          </ul>
        </div>
        <p className='contact-description'>
        Shoot me an email about any inquiries. I’m always happy to chat!
        </p>
        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact
