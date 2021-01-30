import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  React.useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className="footer-container" id="contactme">
      <div className="footer-text">
        <h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000"><u>That's it for now</u></h2>
        <h3 data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">Find out more?</h3>
      </div>
      <div className="footer-icons" data-aos="fade-up" data-aos-offset="-100" data-aos-duration="1000">
        <a href="https://github.com/tams2429">
          <FontAwesomeIcon icon={faGithub} className="github-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/siukeitam/">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
        </a>
        <a href="mailto:tam.s.k.92@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="email-icon"/>
        </a>
      </div>
      <hr className='footer-divider'  data-aos="fade-right" data-aos-offset="-100" data-aos-duration="1000"></hr>
      <div className='footer-copyright'>
        <p>©Siu-Kei-Tam 2021</p>
      </div>
    </div>
  )
}

export default Footer
