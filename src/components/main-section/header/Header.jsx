import React from 'react'
import '../../../styles/Header.scss'
import download from '../../../assets/images/download.svg'
import man from '../../../assets/images/bearded-man-icon.svg'
import Download from '../../download/Download'


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

        <Download/>
        
        {/* <button>
            <div className='resume'>
                <p>Resume</p>
                <img src={download} alt="" />
            </div>
        </button> */}
        
    </nav>
  )
}

export default Header
