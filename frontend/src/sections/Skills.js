import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  React.useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className="about-skills page-container">

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
        <i className="devicon-django-plain" data-aos="fade-right"  ></i>
        <i className="devicon-npm-original-wordmark" data-aos="fade-up"  ></i>
        <i className="devicon-yarn-plain-wordmark" data-aos="fade-up"  ></i>
        <i className="devicon-git-plain-wordmark" data-aos="fade-up"  ></i>
        <i className="devicon-heroku-plain-wordmark" data-aos="fade-left" ></i>
        {/* <i className="devicon-javascript-plain" data-aos="fade-up"></i>
        <i className="devicon-react-original-wordmark" data-aos="fade-up" data-aos-delay="100"></i>
        <i className="devicon-python-plain-wordmark" data-aos="fade-up" data-aos-delay="200"></i>
        <i className="devicon-html5-plain-wordmark" data-aos="fade-up" data-aos-delay="300"></i>
        <i className="devicon-css3-plain-wordmark" data-aos="fade-up" data-aos-delay="400"></i>
        <i className="devicon-sass-original" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-10"></i>
        <i className="devicon-nodejs-plain-wordmark" data-aos="fade-up" data-aos-delay="600" data-aos-offset="-10"></i>
        <i className="devicon-express-original-wordmark" data-aos="fade-up" data-aos-delay="700" data-aos-offset="-10"></i>
        <i className="devicon-mongodb-plain-wordmark" data-aos="fade-up" data-aos-delay="800" data-aos-offset="-10"></i>
        <i className="devicon-postgresql-plain-wordmark" data-aos="fade-up" data-aos-delay="900" data-aos-offset="-10"></i>
        <i className="devicon-django-plain" data-aos="fade-up" data-aos-delay="1000" data-aos-offset="-10"></i>
        <i className="devicon-npm-original-wordmark" data-aos="fade-up" data-aos-delay="1100" data-aos-offset="-10"></i>
        <i className="devicon-yarn-plain-wordmark" data-aos="fade-up" data-aos-delay="1200" data-aos-offset="-10"></i>
        <i className="devicon-git-plain-wordmark" data-aos="fade-up" data-aos-delay="1300" data-aos-offset="-10"></i>
        <i className="devicon-heroku-plain-wordmark" data-aos="fade-up" data-aos-delay="1400" data-aos-offset="-10"></i> */}
      </div>
    </div>
  )
}

export default Skills
