import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import '../images/TripSavvy-GIF.gif'

function Projects() {
  const [project1gifTriggered, setproject1gifTriggered] = React.useState(false)
  const [project2gifTriggered, setproject2gifTriggered] = React.useState(false)
  const [project3gifTriggered, setproject3gifTriggered] = React.useState(false)
  const [project4gifTriggered, setproject4gifTriggered] = React.useState(false)

  const handleMouseEnter = (e) => {
    if (e.target.className.includes(1)) {
      return setproject1gifTriggered(!project1gifTriggered)
    }
    if (e.target.className.includes(2)) {
      return setproject2gifTriggered(!project2gifTriggered)
    }
    if (e.target.className.includes(3)) {
      return setproject3gifTriggered(!project3gifTriggered)
    }
    if (e.target.className.includes(4)) {
      return setproject4gifTriggered(!project4gifTriggered)
    }
  }

  const handleMouseLeave = (e) => {
    if (e.target.className.includes(1)) {
      return setproject1gifTriggered(!project1gifTriggered)
    }
    if (e.target.className.includes(2)) {
      return setproject2gifTriggered(!project2gifTriggered)
    }
    if (e.target.className.includes(3)) {
      return setproject3gifTriggered(!project3gifTriggered)
    }
    if (e.target.className.includes(4)) {
      return setproject4gifTriggered(!project4gifTriggered)
    }
  }

  return (
    <div className="projects-container page-container" id="projects">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <div className="projects-3d">
        <p>Placeholder for 3D cube</p>
      </div>
      <div className="projects-grid">
        <div className="project-1-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className="project-1" src={require(
            project1gifTriggered ?
            '../images/TripSavvy-GIF.gif'
            :
            "../images/TripSavvy.png"
            )}></img>
        </div>
        <div className="project-2-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className="project-2" src={require(
            project2gifTriggered ?
            '../images/TripSavvy-GIF.gif'
            :
            "../images/TripSavvy.png"
            )}></img>
        </div>
        <div className="project-3-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className="project-3" src={require(
            project3gifTriggered ?
            '../images/TripSavvy-GIF.gif'
            :
            "../images/TripSavvy.png"
            )}></img>
        </div>
        <div className="project-4-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className="project-4" src={require(
            project4gifTriggered ?
            '../images/Momen2um-GIF.gif'
            :
            "../images/Momen2um.png"
            )}></img>
        </div>
      </div>
    </div>

  )
}

export default Projects
