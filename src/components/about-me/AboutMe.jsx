import React from 'react'
import "../../styles/AboutMe.scss"
import about from "../../assets/images/Aboutme.svg"

function AboutMe() {
  return (
    <div className='about-me'>
        <div>
            <img className="me" src={about} alt="" />
        </div>
        <div className='title-2'>
            <p>About <label>Me</label></p>
            <div className='profile-summary'>
                <p>Hello! I'm Sreejith K, a dedicated Frontend Developer with a unique background in engineering. Currently, I am a Frontend Developer Intern at Metric Tree Labs, where I specialize in creating engaging and responsive user interfaces using HTML, CSS, JavaScript, React, Git, Bootstrap, Tailwind CSS, Sass, and Axios.</p>
                <p>Previously, I worked as an Instrument and Control Technician and Instrumentation Engineer, where I gained valuable experience in precision and attention to detail. However, my passion for technology and web development led me to transition into software engineering. This shift allowed me to combine my problem-solving skills with creativity, making a meaningful impact in the tech world.</p>
                <p>At Metric Tree Labs, I am responsible for building and optimizing dynamic web applications, collaborating with cross-functional teams, and staying updated with the latest industry trends. I am committed to delivering high-quality digital solutions and continuously improving my skills to create exceptional user experiences.</p>
            </div>

        </div>
    </div>
  )
}

export default AboutMe
