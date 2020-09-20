import React, { Component } from 'react'
import './style.css'

class ContactForm extends Component {
  render () {
    return (
      <div>
        <form id='contactform' action='//formspree.io/joshmichaelgregory@gmail.com' method='POST' >
          <input type='text' name='name' placeholder='Your name' id='name-input' />
          <input type='email' name='_replyto' placeholder='Your email' id='email-input' />
          <input type='text' name='_subject' placeholder='Subject' id='subject-input' />
          <textarea name='message' rows='4' placeholder='Your message' id='message-input' />
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
          <input id='submit-button' type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default ContactForm
