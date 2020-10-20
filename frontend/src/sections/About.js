import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const About = () => {

  React.useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className="about-container page-container" id="about">
      <div className="about-diagrams">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

        >
          <p>
            Born in Hong Kong
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(252,191,73)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(252,191,73)' }}

        >
          <p>
            Raised in UK
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(252,191,73)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(252,191,73)' }}
        >
          <p>
            Represented County For Badminton
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(252,191,73)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(252,191,73)' }}
        >
          <p>
            Started University (Civil Engineering)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(252,191,73)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(252,191,73)' }}
        >
          <p>
            Worked as Geotechnical & Tunnel Engineer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(252,191,73)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(252,191,73)' }}
        >
          <p>
            GA Software Engineering Intensive Bootcamp
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(6,214,160)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(6,214,160)' }}
        >
          <p>
            Prospective Full-Stack Developer
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
      <div className="about-text">
        <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className="about-title">
          <h2>About Me</h2>
        </div>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"  className="about-content">
          <p>
          I am a <u><strong>Full-Stack Developer</strong></u>, Ex-Geotechnical Engineer looking for my next opportunity to further hone my <u><strong>problem solving</strong></u> and my budding interest in <u><strong>design</strong></u>.
          <br></br>
          <br></br>
          In the past 4 years, having worked on major infrastructure projects like <u><strong>HS2</strong></u>, I have thoroughly enjoyed <u><strong>working together in teams</strong></u> to <u><strong>solve unconventional problems</strong></u>. Through opportunities in and outside of work, I was fortunate enough to be exposed to the world of coding and experience the satisfaction that comes from both <u><strong>solving a difficult coding problem</strong></u> and <u><strong>building an aesthetic, Front-End UI</strong></u>. Thus, I wish to start anew in a career where I can combine both problem solving and design.
          <br></br>
          <br></br>
          I have recently graduated from General Assembly's 12 week, <u><strong>Software Engineering Immersive Course</strong></u> which covered the fundamentals of <u><strong>Full-Stack development</strong></u> along with <u><strong>agile methodologies</strong></u>. This included, but not limited to, the following stack: <u><strong>React JS, JavaScript, Node JS with Express, Mongo DB, Django with Python</strong></u>.
          <br></br>
          <br></br>
          This portfolio site has been created with mainly React JS, HTML5, SCSS (with Bulma) and other libraries. For details, please have a look at my GitHub repository for this.
          <br></br>
          <br></br>
          Check out my projects and look forward to collaborating with you soon!
          </p>
        </div>

      </div>
    </div>

  )
}

export default About
