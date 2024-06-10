import React from 'react'
import Header from './header/Header'
import HeroSection from './hero-section/HeroSection'
import "../../styles/MainSection.scss"
import ScrollTop from '../scroll-top/ScrollTop'

function MainSection({ aboutRef, skillsRef, projectsRef, contactRef }) {

  return (

    <div className='main-section'>
      <Header        
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}/>
      <HeroSection/>
    </div>

  )
}

export default MainSection

