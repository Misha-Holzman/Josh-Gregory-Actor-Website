import React, { Component } from 'react'
import ScrollTop from 'react-scrolltop-button'
import './style.css'

class Credits extends Component {
  render () {
    return (
      <div className='credits-main-container'>
        <div className='credits-top-part-container'>
          <h2 className='credits-main-title'>Credits</h2>
          <ul className='credits-links-ul'>
            <li className='credits-link-li'><a href='#theatre' className='credits-link link'>Theatre</a></li>
            <li className='credits-link-li'><a href='#tv' className='credits-link link'>Television / Film</a></li>
            <li className='credits-link-li'><a href='#podcasts' className='credits-link link'>Podcasts</a></li>
            <li className='credits-link-li'><a href='#training' className='credits-link link'>Training</a></li>
            <li className='credits-link-li'><a href='#special-skills' className='credits-link link'>Special Skills</a></li>
          </ul>
          <ul className='credits-vitals-ul'>
            <li className='credits-vitals-li'><span className='credits-vitals-span'>Height:</span> 5’9”</li>
            <li className='credits-vitals-li'><span className='credits-vitals-span'>Weight:</span> 150</li>
            <li className='credits-vitals-li'><span className='credits-vitals-span'>Hair:</span> Brown</li>
            <li className='credits-vitals-li'><span className='credits-vitals-span'>Eyes:</span> Blue</li>
          </ul>
          <h2 className='member-equity-text'>Member of Actors' Equity Association<img src='https://i.imgur.com/g75FFgi.png' className='members-equity-logo' /></h2>
          <a href='#theatre' id='link'>
            <img
              src='https://i.imgur.com/T5f8v9i.png'
              height='30px'
              className='arrow'
            />
          </a>
        </div>
        <ScrollTop
          text='top'
          distance={500}
          breakpoint={768}
          style={{  }}
          className='scroll-your-role'
          id='scroll-your-role-id'
          speed={600}
          target={0}
        />

        <div className='credits-info-container'>
          <div className='theatre-container' id='theatre'>
            <div className='theatre-title-container'>
              <h2 className='theater-section-title'>Theatre</h2>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Midsummer Night’s Dream</p>
              <p className='play-character'>––– Flute // Thisby –––</p>
              <h3 className='theater-name'>Studio Ensemble Theatre (NYC)</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Charlotte’s Web</p>
              <p className='play-character'>––– Wilbur –––</p>
              <h3 className='theater-name'>Theatreworks USA (Nat. Tour)</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Little Tales…Aesop’s Fables</p>
              <p className='play-character'>––– Brother // Cat // Wolf // Hare –––</p>
              <h3 className='theater-name'>Manhattan Children’s Theatre (NYC)</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Dearly Departed</p>
              <p className='play-character'>––– Rev. Hooker // Clyde // Norval –––</p>
              <h3 className='theater-name'>Marvel Theater (Fredonia, NY)</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Betty’s Summer Vacation</p>
              <p className='play-character'>––– Keith –––</p>
              <h3 className='theater-name'>Bartlett Theatre</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Henry IV Part I/II</p>
              <p className='play-character'>––– Hal // King –––</p>
              <h3 className='theater-name'>Geneva Smith Opera House</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Midsummer Night’s Dream</p>
              <p className='play-character'>––– Demetrius –––</p>
              <h3 className='theater-name'>Marvel Theater (Fredonia, NY)</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>No Exit</p>
              <p className='play-character'>––– Garcin –––</p>
              <h3 className='theater-name'>PAC Productions</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Our Town</p>
              <p className='play-character'>––– Howie Newsome –––</p>
              <h3 className='theater-name'>Marvel Theater (Fredonia, NY)</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Red Peppers</p>
              <p className='play-character'>––– George –––</p>
              <h3 className='theater-name'>Bartlett Theatre</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Design For Living</p>
              <p className='play-character'>––– Leo –––</p>
              <h3 className='theater-name'>Bartlett Theatre</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>You’re a …Charlie Brown</p>
              <p className='play-character'>––– Linus –––</p>
              <h3 className='theater-name'>Bartlett Theatre</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>Taming of the Shrew</p>
              <p className='play-character'>––– Vincentio –––</p>
              <h3 className='theater-name'>Marvel Theater (Fredonia, NY)</h3>
            </div>
            <div className='theater-info-part-last'>
              <p className='play-name'>Oedi (a comedy)</p>
              <p className='play-character'>––– Oedi –––</p>
              <h3 className='theater-name'>Geneva Theatre Guild</h3>
            </div>
          </div>

          <div className='tv-container' id='tv'>
            <h2 className='tv-section-title'>Television and Film</h2>
            <div className='theater-info-part'>
              <p className='play-name'>Gracie</p>
              <p className='play-character'>– Drunk at the bar –</p>
              <h3 className='theater-name'>Picturehouse // Dir. Davis Guggenheim</h3>
            </div>
            <div className='theater-info-part'>
              <p className='play-name'>30 Rock</p>
              <p className='play-character'>– Seen on elevator with Tina Fey –</p>
              <h3 className='theater-name'>NBC</h3>
            </div>
            <div className='theater-info-part-last'>
              <p className='play-name'>Reflection</p>
              <p className='play-character'>– Carl // Principal –</p>
              <h3 className='theater-name'>Robert Dixon Prod. – York Ent.</h3>
            </div>
          </div>
          <div className='podcasts-container' id='podcasts'>
            <div className='grant-title-container'>
              <h2 className='podcasts-section-title'>Podcasts</h2>
            </div>
            <div className='theater-info-part-last'>
              <p className='podcast-title'>Desperate Nightmares…King, MO</p>
              <p className='podcast-character'>– Lyle –</p>
              <h3 className='podcast-name'> Christ the King Prod./Rives Elliot </h3>
              <h3 className='podcast-episode'> (Episode 102 “Fetal Recall”) </h3>
            </div>
          </div>
          <div className='training-container' id='training'>
            <div className='grant-title-container'>
              <h2 className='training-section-title'>Training</h2>
            </div>
            <div className='training-info-part'>
              <p className='training-title'>The Freeman Studio - Scott Freeman (presently)</p>
            </div>
            <div className='training-info-part'>
              <p className='training-title'>Sedgwick Russell Acting Studio – <br />Rob Sedgwick, Cathy Russell</p>
            </div>
            <div className='training-info-part'>
              <p className='training-title'>State University of New York at Fredonia – BFA Acting</p>
            </div>
            <div className='training-info-part-last'>
              <p className='training-title-last'><span id='master-class'>Master class:</span><br />Glenda Jackson, Dame Diana Rigg, <br />Tony Kushner, Judith Ivey, John Plumpis, Noh Theater, Alice Ripley</p>
            </div>
          </div>
          <div className='special-skills-container' id='special-skills'>
            <div className='special-skills-title-container'>
              <h2 className='special-skills-section-title'>Special Skills</h2>
            </div>
            <div className='special-skills-info-part'>
              <p className='special-skills-name'>Dialects:</p>
              <p className='special-skills-specifics'>Down Eastern, German, Stand. British-Stage</p>
            </div>
            <div className='special-skills-info-part'>
              <p className='special-skills-name'>Combat:</p>
              <p className='special-skills-specifics'>(Unarmed, Rapier/Dagger-SAFD Certified)</p>
            </div>
            <div className='special-skills-info-part'>
              <p className='special-skills-name'>Licensed Driver</p>
              <p className='special-skills-specifics'>(Standard) Valid Passport</p>
            </div>
            <div className='special-skills-info-part-last'>
              <p className='special-skills-singular'>– Great with Kids</p>
              <p className='special-skills-singular'>– Voice over Experience</p>
              <p className='special-skills-singular'>– Film and Oscars guru!</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Credits
