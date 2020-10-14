import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
// import '../images/TripSavvy-GIF.gif'

function Project1() {
  const [project1gifTriggered, setproject1gifTriggered] = React.useState(false)

  const handleMouseEnter = (e) => {
    if (e.target.className.includes(1)) {
      return setproject1gifTriggered(!project1gifTriggered)
    }
  }

  const handleMouseLeave = (e) => {
    if (e.target.className.includes(1)) {
      return setproject1gifTriggered(!project1gifTriggered)
    }
  }

  return (
    <div className="project-container page-container" id="project">
      <div className="project-grid">
        <Tilt className="ind-project-container Tilt" options={{ max : 10, scale: 1.05, speed: 2000}}>
          <div className="project-1-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="project-1" src={require(
              project1gifTriggered ?
              '../images/PokePacMan-GIF.gif'
              :
              "../images/PokePacMan.png"
              )}></img>
          </div>
          <div className="project-1-text">
            <p>This is the project description for project 1</p>
          </div>
        </Tilt>
      </div>
    </div>

  )
}

export default Project1
