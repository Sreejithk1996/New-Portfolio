import React from 'react'
import Header from './header/Header'
import HeroSection from './hero-section/HeroSection'
import "../../styles/MainSection.scss"

function MainSection() {
  return (
    <div className='main-section'>
        <Header/>
        <HeroSection/>
    </div>
  )
}

export default MainSection

