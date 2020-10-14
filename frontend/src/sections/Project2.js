import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
// import '../images/TripSavvy-GIF.gif'

function Project2() {
  const [project2gifTriggered, setproject2gifTriggered] = React.useState(false)

  const handleMouseEnter = (e) => {
    if (e.target.className.includes(2)) {
      return setproject2gifTriggered(!project2gifTriggered)
    }
  }

  const handleMouseLeave = (e) => {
    if (e.target.className.includes(2)) {
      return setproject2gifTriggered(!project2gifTriggered)
    }
  }

  return (
    <div className="project-container page-container" id="project">
      <div className="project-title">
        <h2>Project</h2>
      </div>
      <div className="project-grid">
        <Tilt className="ind-project-container Tilt" options={{ max : 10, scale: 1.05, speed: 2000}}>
          <div className="project-2-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="project-2" src={require(
              project2gifTriggered ?
              '../images/DirectorDictator-GIF.gif'
              :
              "../images/DirectorDictator.png"
              )}></img>
          </div>
          <div className="project-2-text">
            <p>This is the project description for project 2</p>
          </div>
        </Tilt>
      </div>
    </div>

  )
}

export default Project2
