import React from 'react'
import '../../../styles/Header.scss'
import man from '../../../assets/images/bearded-man-icon.svg'
import Download from '../../download/Download'
import resume from "../../../assets/docs/SreejithResume.pdf"


function Header() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={man} alt="" />
            <p>Sreejith K</p>
        </div>
        <div className='nav-menu'>
            <a href="#">About Me</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact Me</a>
        </div>
        <a href={resume} download="Resume"><Download/></a> 
    </nav>
  )
}

export default Header
