import React from 'react'

import Navbar from './sections/Navbar'
import Home from './sections/Home'
import ParallaxDivider from './sections/ParallaxDivider'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'



const App = () => {

  return (
    <div className="main-container">
      <Navbar />
      <Home />
      {/* <ParallaxDivider /> */}
      <About />
      {/* <ParallaxDivider /> */}
      <Projects />
      <Footer />
    </div>

  )
}

export default App
