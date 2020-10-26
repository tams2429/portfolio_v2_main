import React from 'react'
import { AnimatedBg, Transition } from 'scroll-background'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

import Navbar from './sections/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './sections/Footer'

const App = () => {

  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <AnimatedBg>
        <About />
        <Transition height="600px" from="#FFFFFF" to="#011627" position={0.3}>
          <Link to="skills" smooth={true} duration={1000}>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow animate__animated animate__pulse animate__infinite"/>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow animate__animated animate__pulse animate__infinite"/>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow animate__animated animate__pulse animate__infinite"/>
          </Link>
        </Transition >
        <Skills />
        <Transition height="600px" from="#011627" to="#FFFFFF" className="transition-container">
          <Link to="projects" smooth={true} duration={1000}>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow animate__animated animate__pulse animate__infinite"/>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow animate__animated animate__pulse animate__infinite"/>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow animate__animated animate__pulse animate__infinite"/>
          </Link>
        </Transition >
        <Projects />
      </AnimatedBg>
      <Footer />
    </div>
  )
}

export default App
