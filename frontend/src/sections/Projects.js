import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'

import ThumbnailGallery from '../components/ThumbnailGallery'

function Projects() {
  // const [project1gifTriggered, setproject1gifTriggered] = React.useState(false)
  // const [project2gifTriggered, setproject2gifTriggered] = React.useState(false)
  // const [project3gifTriggered, setproject3gifTriggered] = React.useState(false)
  // const [project4gifTriggered, setproject4gifTriggered] = React.useState(false)

  // const handleMouseEnter = (e) => {
  //   if (e.target.className.includes(1)) {
  //     return setproject1gifTriggered(!project1gifTriggered)
  //   }
  //   if (e.target.className.includes(2)) {
  //     return setproject2gifTriggered(!project2gifTriggered)
  //   }
  //   if (e.target.className.includes(3)) {
  //     return setproject3gifTriggered(!project3gifTriggered)
  //   }
  //   if (e.target.className.includes(4)) {
  //     return setproject4gifTriggered(!project4gifTriggered)
  //   }
  // }

  // const handleMouseLeave = (e) => {
  //   if (e.target.className.includes(1)) {
  //     return setproject1gifTriggered(!project1gifTriggered)
  //   }
  //   if (e.target.className.includes(2)) {
  //     return setproject2gifTriggered(!project2gifTriggered)
  //   }
  //   if (e.target.className.includes(3)) {
  //     return setproject3gifTriggered(!project3gifTriggered)
  //   }
  //   if (e.target.className.includes(4)) {
  //     return setproject4gifTriggered(!project4gifTriggered)
  //   }
  // }

  return (
    <div className="projects-container page-container" id="projects">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <ThumbnailGallery />
      {/* <div className="projects-3d">
        <p>Placeholder for 3D cube</p>
      </div>
      <div className="projects-grid">
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
      </div> */}
    </div>

  )
}

export default Projects
