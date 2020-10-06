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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium. Adipiscing diam donec adipiscing tristique risus nec feugiat. A pellentesque sit amet porttitor eget dolor morbi. Consectetur a erat nam at lectus urna duis convallis convallis. Tristique magna sit amet purus gravida. Et odio pellentesque diam volutpat commodo. Etiam dignissim diam quis enim. Diam vel quam elementum pulvinar etiam non. Nunc scelerisque viverra mauris in aliquam sem. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Morbi tristique senectus et netus et malesuada.

          Fames ac turpis egestas maecenas pharetra convallis posuere. Malesuada fames ac turpis egestas integer eget aliquet. Venenatis urna cursus eget nunc scelerisque. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vitae turpis massa sed elementum tempus egestas sed sed. At erat pellentesque adipiscing commodo elit at imperdiet. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Et magnis dis parturient montes nascetur. Mollis nunc sed id semper risus in hendrerit. Consectetur lorem donec massa sapien faucibus et. Vitae auctor eu augue ut lectus arcu bibendum at. Morbi leo urna molestie at elementum. Nunc consequat interdum varius sit amet mattis. Risus viverra adipiscing at in tellus integer. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Non sodales neque sodales ut etiam sit amet nisl.
          </p>
        </div>
        <div className="about-skills">
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
    </div>

  )
}

export default About
