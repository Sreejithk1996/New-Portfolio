import React from 'react'
import "../../styles/Footer.scss"
import copyright from "../../assets/images/copyright.svg"

function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-content'>
            <img src={copyright} alt="" />
            <p>2024 | Coded with ❤️️ by <a href="https://github.com/Sreejithk1996" target='blank'>Sreejith K</a></p>
        </div>
    </div>
  )
}

export default Footer
