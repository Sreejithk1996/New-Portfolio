import React from 'react'
import banner from '../../../assets/images/Banner.svg'
import "../../../styles/HeroSection.scss"
import Github from './social/Github'
import Linkedin from './social/Linkedin'
import Medium from './social/Medium'
import Facebook from './social/Facebook'


function HeroSection() {
  return (
    <>
    <div className='banner-section'>
        <div className='banner-section-1'>
            <div className='banner-sub-1'>
                <p>Hello I'am <label>Sreejith K</label></p> 
                <p><label>Frontend</label> <label className='stroke'>Developer</label></p>
                <p>Based In <label>India.</label></p>
            </div>
            <div className='banner-sub-2'>
                <p>I'm Sreejith K, an engineer with a keen interest in software development and coding adventures.I'm in the early stages of my coding journey, focusing on Front-end Development. Excited to grow and contribute to the tech community</p>
            </div>
        </div>
        <div className='banner-section-2'>
            <img src={banner} alt="" />
        </div>
    </div>
    <div className='banner-section-3'>
        <a href="https://github.com/Sreejithk1996" target='blank'>
        <div className='git'>
          <Github fill='#00000'/>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/sreejith-k-a73362187/">
        <div className='link'>
            <Linkedin fill='#00000'/>
        </div>
        </a>
        <a href="https://medium.com/@SreejithK96">
        <div className='med'>
          <Medium fill='#00000'/>
        </div>
        </a>
        <a href="https://www.facebook.com/sreejith.kumar.1042/">
        <div className='face'>
          <Facebook fill='#00000'/>
        </div>
        </a>
    </div>
    </>
  )
}

export default HeroSection