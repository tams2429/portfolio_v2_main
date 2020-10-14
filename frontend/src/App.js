import React from 'react'

import Navbar from './sections/Navbar'
import Home from './sections/Home'
import ParallaxDivider from './sections/ParallaxDivider'
import About from './sections/About'
import ThumbnailGallery from './components/ThumbnailGallery'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Project1 from './sections/Project1'
import Project2 from './sections/Project2'
import Project3 from './sections/Project3'
import Project4 from './sections/Project4'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {EffectCube, EffectCoverflow, Thumbs} from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/effect-cube/effect-cube.scss';
// import 'swiper/components/effect-coverflow/effect-coverflow.scss';

// SwiperCore.use([EffectCube, EffectCoverflow, Thumbs]);

const App = () => {
  // const [thumbsSwiper, setThumbsSwiper] = React.useState(null)

  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <ParallaxDivider />
      <About />
      <ParallaxDivider />
      {/* <ThumbnailGallery /> */}
      <Projects />
      {/* <Swiper thumbs={{ swiper: thumbsSwiper }}>
        <SwiperSlide className="projects-content">
          <Project1 />
        </SwiperSlide>
        <SwiperSlide className="main-content">
          <Project2 />
        </SwiperSlide>
        <SwiperSlide className="main-content">
          <Project3 />
        </SwiperSlide>
        <SwiperSlide className="main-content">
          <Project4 />
        </SwiperSlide>
      </Swiper>
      <Swiper className="slider" onSwiper={setThumbsSwiper} watchSlidesVisibility watchSlidesProgress>
        <SwiperSlide className="projects-content">
          <Project1 />
        </SwiperSlide>
        <SwiperSlide className="main-content">
          <Project2 />
        </SwiperSlide>
        <SwiperSlide className="main-content">
          <Project3 />
        </SwiperSlide>
        <SwiperSlide className="main-content">
          <Project4 />
        </SwiperSlide>
      </Swiper> */}
      <Footer />
    </div>

  )
}

export default App
