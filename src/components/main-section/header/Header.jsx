import React from 'react'
import '../../../styles/Header.scss'
import man from '../../../assets/images/bearded-man-icon.svg'
import Download from '../../download/Download'
import resume from "../../../assets/docs/SREEJITH's Resume.pdf"



function Header({aboutRef,skillsRef,projectsRef,contactRef}) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={man} alt="" />
            <p>Sreejith K</p>
        </div>
        <div className='nav-menu'>
          <ul>
            <li onClick={() => scrollToSection(aboutRef)} className='about'><a href="#" >About Me</a></li>
            <li onClick={() => scrollToSection(skillsRef)} className='skills'><a href="#">Skills</a></li>
            <li onClick={() => scrollToSection(projectsRef)} className='project'><a href="#">Projects</a></li>
            <li onClick={() => scrollToSection(contactRef)} className='contact'><a href="#">Contact Me</a></li>
          </ul>
          
        </div>
        <a href={resume} download="Resume"><Download/></a> 
    </nav>

    
  )
}



export default Header
