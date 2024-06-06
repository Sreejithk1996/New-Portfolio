import React from 'react'
import "../../styles/Footer.scss"
import copyright from "../../assets/images/copyright.svg"

function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-content'>
            <img src={copyright} alt="" />
            <p>2024 | Coded with ❤️️ by Sreejith K</p>
        </div>
    </div>
  )
}

export default Footer
