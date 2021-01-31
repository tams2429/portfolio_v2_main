import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import PokeThumbnail from '../images/PokePacMan.png'
import DirectorDictatorThumbnail from '../images/DirectorDictator.png'
import TripSavvyThumbnail from '../images/TripSavvy.png'
import Momen2umThumbnail from '../images/Momen2um.png'
import TheHubThumbnail from '../images/TheHub.png'
import PokeThumbnailGif from '../images/PokePacMan-GIF.gif'
import DirectorDictatorThumbnailGif from '../images/DirectorDictator-GIF.gif'
import TripSavvyThumbnailGif from '../images/TripSavvy-GIF.gif'
import Momen2umThumbnailGif from '../images/Momen2um-GIF.gif'
import TheHubThumbnailGif from '../images/TheHub-GIF.gif'

function ThumbnailGallery() {

  const [thumbnails, setthumbnails] = React.useState([PokeThumbnail, DirectorDictatorThumbnail, TripSavvyThumbnail, Momen2umThumbnail, TheHubThumbnail])

  const [activeIndex, setactiveIndex] = React.useState('0')

  const [thumbnailGifs, setthumbnailGifs] = React.useState([PokeThumbnailGif, DirectorDictatorThumbnailGif, TripSavvyThumbnailGif, Momen2umThumbnailGif, TheHubThumbnailGif])

  const [projectGifTriggered, setprojectGifTriggered] = React.useState(false)

  React.useEffect(() => {
    AOS.init({})
  }, [])

  const handleMouseEnter = () => {
    return setprojectGifTriggered(!projectGifTriggered)
  }

  const handleMouseLeave = () => {
    return setprojectGifTriggered(!projectGifTriggered)
  }

  const handleClick = (e) => {
    const activeIndex = e.target.getAttribute('data-index')
    setactiveIndex(activeIndex)
  }

  const activeText = (activeIndex) => {
    if (activeIndex === '0') {
      return (
        <div className="project1-summary">
          <div className="project-headers">
            <div className="project-title">
              <h2>Poké Pac-Man Game</h2>
              <div className="project-links">
                <a href="https://tams2429.github.io/GA-Project-1/">
                  <FontAwesomeIcon icon={faLink} className="link-icon"/>
                </a>
                <a href="https://github.com/tams2429/GA-Project-1">
                  <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </a>
              </div>
            </div>
            <h3>HTML5 | CSS | JavaScript - Solo</h3>
          </div>
          <div className="project-description">
            This project was made with <strong>HTML5, CSS3 and Vanilla JavaScript.</strong> My inspiration for this game was the classic Pac-Man along with Pokémon, where the most rewarding part of this project was figuring out how to apply a 'chasing' logic to the 'Ghosts'.
          </div>
        </div>
      )
    }
    if (activeIndex === '1') {
      return (
        <div className="project2-summary">
          <div className="project-headers">
            <div className="project-title">
              <h2>Director Dictator</h2>
              <div className="project-links">
                <a href="https://directordictator.netlify.app/">
                  <FontAwesomeIcon icon={faLink} className="link-icon"/>
                </a>
                <a href="https://github.com/tams2429/GA-Project-2-MovieAPI">
                  <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </a>
              </div>
            </div>
            <h3>React JS | HTML5 | SCSS - Group</h3>
          </div>
          <div className="project-description">
            This app, Director Dictator, was made with <strong>React JS, HTML5, SCSS (with Bulma framework).</strong>  The motivation behind this, was to help indecisive people choose what movie to watch especially given the COVID-19 lockdown situation.
          </div>
        </div>
      )
    }
    if (activeIndex === '2') {
      return (
        <div className="project3-summary">
          <div className="project-headers">
            <div className="project-title">
              <h2>TripSavvy</h2>
              <div className="project-links">
                <a href="https://tripsavvy.herokuapp.com/">
                  <FontAwesomeIcon icon={faLink} className="link-icon"/>
                </a>
                <a href="https://github.com/tams2429/GA-Project-3-TripSavvy">
                  <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </a>
              </div>
            </div>
            <h3>React JS | HTML5 | SCSS | Node JS | Express JS | Mongo DB - Group</h3>
          </div>
          <div className="project-description">
            The app, TripSavvy, was inspired from an app I currently use, LuckyTrip, and is essentially a trip selector app which helps users discover their next European City holiday destination. This is a full-stack app utilising the full <strong>MERN</strong> stack <strong>(Mongo Databases, Express JS, React JS, Node JS)</strong> with additional technologies (i.e. <strong>SCSS with Bulma framework</strong>).
          </div>
        </div>
      )
    }
    if (activeIndex === '3') {
      return (
        <div className="project4-summary">
          <div className="project-headers">
            <div className="project-title">
              <h2>Momen2um</h2>
              <div className="project-links">
                <a href="https://momen2um.herokuapp.com/">
                  <FontAwesomeIcon icon={faLink} className="link-icon"/>
                </a>
                <a href="https://github.com/tams2429/GA-Project-4-Momen2um">
                  <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </a>
              </div>
            </div>
            <h3>React JS | HTML5 | SCSS | AntDesign | Django | Python | PostgreSQL DB - Solo</h3>
          </div>
          <div className="project-description">
            Momen2um is a productivity app, inspired by the Chrome Extension, Momentum, with the aim to create an app for daily use, by adding custom features such as a video player, a news article feed, a to-do list and a countdown/workout timer, all available in one location. This is a full-stack app utilising the following technologies: <strong>React JS, Django with Python, PostgreSQL Database, HTML5, SCSS with Bulma framework and AntDesign.</strong>
          </div>
        </div>
      )
    }
    if (activeIndex === '4') {
      return (
        <div className="project5-summary">
          <div className="project-headers">
            <div className="project-title">
              <h2>The Hub</h2>
              <div className="project-links">
                <a href="https://video-activity-hub.herokuapp.com/">
                  <FontAwesomeIcon icon={faLink} className="link-icon"/>
                </a>
                <a href="https://github.com/ActivityHub/video-activity-hub">
                  <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </a>
              </div>
            </div>
            <h3>React JS | HTML5 | SCSS | Bootstrap | Twilio API | Google Firebase - Group</h3>
          </div>
          <div className="project-description">
            The Hub is a social experiences web application designed by a team of 2 UX Designers & 4 Software Developers and built over 2 days, as a solution to General Assembly Boston Hackathon to reimagine pre-pandemic social activities and inspire togetherness.

            This was inspired by combining AirBnB Experiences and Zoom Breakout rooms. Ultimately, our aim was to not only bring people together from across the world but to also encourage users to self improve and continue to learn new things even after the pandemic.
            This is a full-stack app utilising the following technologies: <strong>React JS, HTML5, SCSS, Bootstrap, Twilio Video API and Google Firebase.</strong>
          </div>
        </div>
      )
    }
  }

  return (
    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className="thumbnail-gallery-container" >
      <div className="thumbnail-content">
        <Tilt className="active-thumbnail Tilt"  options={{ max: 10, scale: 1.05, speed: 2000 }}>
          <img src={!projectGifTriggered ? thumbnails[activeIndex] : thumbnailGifs[activeIndex]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </Tilt>
        <div className="thumbnail-grid">
          {thumbnails.map((thumbnail, index) => {
            return (
              <div className="thumbnails" key={index}>
                <img src={thumbnail} data-index={index} onClick={handleClick}/>
              </div>
            )
          })}
        </div>
      </div>
      <div className="text-content">
        {activeText(activeIndex)}
      </div>
    </div>
  )
}

export default ThumbnailGallery
