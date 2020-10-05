import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const texts = ['Programmer', 'Coffee Addict', 'Whisky Enthusiast', 'Outside-The-Box Thinker']
  let element = 0
  let index = 0
  let currentText = null
  let letter = null

function Home() {
  const [variableText, setvariableText] = React.useState('')

  React.useEffect(() => {
    const erase = () => {
      if(index === currentText.length+1) {
        setTimeout(erase, 1000)
        letter = currentText.slice(0, --index)
        setvariableText(letter)
      } else if(index > 0){
        letter = currentText.slice(0, --index)
        setvariableText(letter)
        setTimeout(erase, 100)
      } else{
        element++
        setTimeout(type, 400)
      }
    }
    const type = () => {
      currentText = texts[element]
      letter = currentText.slice(0, index++)
      setvariableText(letter)
      if (letter.length === currentText.length && element !== texts.length-1) {
        erase()
      } else if(element === texts.length-1) {
          if(index <= currentText.length) {
              setTimeout(type, 400)
          }
          return
      } else {
          setTimeout(type, 400)
      }
    }
    type()
  }, [])

  return (
    <div className="home-container" id="home" >
      <div className="box-border">
        <div className="innerbox-border">
          <div className="titles">
              <p>Hi,
                <br/>My name is <strong className='name'>Siu Kei</strong>,
                <br/>I'm a <em><span className='typing'>{variableText}</span></em>
              </p>
          </div>
          <div className="button-icon-container">
            <div className="button-container">
              <button className="start-button animate__animated animate__fadeInLeft">
                LET'S GET STARTED
              </button>
            </div>
            <div className="icon-container">
              <a href="https://github.com/tams2429">
                <FontAwesomeIcon icon={faGithub} className="github-icon animate__animated animate__fadeInUp"/>
              </a>
              <a href="https://www.linkedin.com/in/siukeitam/">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon animate__animated animate__fadeInUp"/>
              </a>
              <a href="mailto:tam.s.k.92@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="email-icon animate__animated animate__fadeInUp"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
