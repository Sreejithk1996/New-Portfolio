import React from 'react'
import banner from '../../../assets/images/Banner.svg'
import "../../../styles/HeroSection.scss"

function HeroSection() {
  return (
    <div className='banner-section'>
        <div className='banner-section-1'>
            <div className='banner-sub-1'>
                <p>Hello I'am <label>Evren Shah</label></p> 
                <p><label>Frontend</label> Developer</p>
                <p>Based In <label>India.</label></p>
            </div>
            <div className='banner-sub-2'>
                <p>I'm Evren Shah, an engineer with a keen interest in software development and coding adventures.I'm in the early stages of my coding journey, focusing on Front-end and Back-end Development. Excited to grow and contribute to the tech community</p>
            </div>
        </div>
        <div className='banner-section-2'>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default HeroSection
