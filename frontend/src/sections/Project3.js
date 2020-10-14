import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
// import '../images/TripSavvy-GIF.gif'

function Project3() {
  const [project3gifTriggered, setproject3gifTriggered] = React.useState(false)

  const handleMouseEnter = (e) => {
    if (e.target.className.includes(3)) {
      return setproject3gifTriggered(!project3gifTriggered)
    }
  }

  const handleMouseLeave = (e) => {
    if (e.target.className.includes(3)) {
      return setproject3gifTriggered(!project3gifTriggered)
    }
  }

  return (
    <div className="project-container page-container" id="project">
      <div className="project-title">
        <h2>Project</h2>
      </div>
      <div className="project-grid">
        <Tilt className="ind-project-container Tilt" options={{ max : 10, scale: 1.05, speed: 2000}}>
          <div className="project-3-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="project-3" src={require(
              project3gifTriggered ?
              '../images/TripSavvy-GIF.gif'
              :
              "../images/TripSavvy.png"
              )}></img>
          </div>
          <div className="project-3-text">
            <p>The app, TripSavvy, was inspired from an app I currently use, LuckyTrip, and is essentially a trip selector app which helps users discover their next European City holiday destination. This is a full-stack app utilising the full <strong>MERN</strong> stack <strong>(Mongo Databases, Express JS, React JS, Node JS)</strong> with additional technologies (i.e. <strong>SCSS with Bulma framework</strong>).</p>
          </div>
        </Tilt>
      </div>
    </div>

  )
}

export default Project3
