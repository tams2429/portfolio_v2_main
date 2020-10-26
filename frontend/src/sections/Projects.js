import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'

import ThumbnailGallery from '../components/ThumbnailGallery'

function Projects() {

  React.useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className="projects-container page-container" id="projects">
      <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className="projects-title">
        <h2>Projects</h2>
      </div>
      <ThumbnailGallery />
    </div>
  )
}

export default Projects
