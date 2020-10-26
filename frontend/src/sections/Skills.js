import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  React.useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className="about-skills page-container" id="skills">
      <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className="about-skills-title">
        <h2>Competent in</h2>
      </div>
      <div className="about-skills-container">
        <i className="devicon-javascript-plain" data-aos="fade-right"></i>
        <i className="devicon-react-original-wordmark" data-aos="fade-down" ></i>
        <i className="devicon-python-plain-wordmark" data-aos="fade-down" ></i>
        <i className="devicon-html5-plain-wordmark" data-aos="fade-down" ></i>
        <i className="devicon-css3-plain-wordmark" data-aos="fade-left" ></i>
        <i className="devicon-sass-original" data-aos="fade-right"  ></i>
        <i className="devicon-nodejs-plain-wordmark" data-aos="zoom-in"  ></i>
        <i className="devicon-express-original-wordmark" data-aos="zoom-in"  ></i>
        <i className="devicon-mongodb-plain-wordmark" data-aos="zoom-in"  ></i>
        <i className="devicon-postgresql-plain-wordmark" data-aos="fade-left"  ></i>
        <i className="devicon-django-plain" data-aos="fade-right" data-aos-offset="-2"  ></i>
        <i className="devicon-npm-original-wordmark" data-aos="fade-up" data-aos-offset="-2"  ></i>
        <i className="devicon-yarn-plain-wordmark" data-aos="fade-up" data-aos-offset="-2"  ></i>
        <i className="devicon-git-plain-wordmark" data-aos="fade-up" data-aos-offset="-2"  ></i>
        <i className="devicon-heroku-plain-wordmark" data-aos="fade-left" data-aos-offset="-2" ></i>
      </div>
    </div>
  )
}

export default Skills
