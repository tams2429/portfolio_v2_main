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
        console.log(letter)
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
        <div className="titles">
            <p>Hi,
              <br/>My name is <strong className='name'>Siu Kei</strong>,
              <br/>I'm a <em><span className='typing'>{variableText}</span></em>
            </p>
        </div>
        <div className="button-container">
          <button className="start-button">
            LET'S GET STARTED
          </button>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default Home
