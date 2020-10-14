import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
// import '../images/TripSavvy-GIF.gif'

function Project4() {
  const [project4gifTriggered, setproject4gifTriggered] = React.useState(false)

  const handleMouseEnter = (e) => {
    if (e.target.className.includes(4)) {
      return setproject4gifTriggered(!project4gifTriggered)
    }
  }

  const handleMouseLeave = (e) => {
    if (e.target.className.includes(4)) {
      return setproject4gifTriggered(!project4gifTriggered)
    }
  }

  return (
    <div className="project-container page-container" id="project">
      <div className="project-title">
        <h2>Project</h2>
      </div>
      <div className="project-grid">
        <Tilt className="ind-project-container Tilt" options={{ max : 10, scale: 1.05, speed: 2000}}>
          <div className="project-4-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="project-4" src={require(
              project4gifTriggered ?
              '../images/Momen2um-GIF.gif'
              :
              "../images/Momen2um.png"
              )}></img>
          </div>
          <div className="project-4-text">
            <p>Momen2um is a productivity app, inspired by the Chrome Extension, Momentum, with the aim to create an app for daily use, by adding custom features such as a video player, a news article feed, a to-do list and a countdown/workout timer, all available in one location. This is a full-stack app utilising the following technologies: <strong>React JS, Django with Python, PostgreSQL Database, HTML5, SCSS with Bulma framework and AntDesign.</strong>
            </p>
          </div>
        </Tilt>
      </div>
    </div>

  )
}

export default Project4
