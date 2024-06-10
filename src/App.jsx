import "../src/styles/App.scss"
import MainSection from './components/main-section/MainSection';
import MySkills from './components/my-skills/MySkills';
import MyExperience from './components/my-experience/MyExperience';
import AboutMe from './components/about-me/AboutMe';
import MyProjects from './components/my-projects/MyProjects';
import ContactForm from './components/contact-form/ContactForm';
import Footer from './components/footer/Footer';
import MyBlogs from './components/my-blogs/MyBlogs';
import React, { useRef } from 'react';
import ScrollTop from "./components/scroll-top/ScrollTop";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='portfolio'>
    <MainSection         
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}/>
    <ScrollTop/>
    <MySkills ref={skillsRef}/>
    <MyExperience/>
    <AboutMe ref={aboutRef}/>
    <MyProjects ref={projectsRef}/>
    {/* <MyBlogs/> */}
    <ContactForm ref={contactRef}/>
    <Footer/>
    </div>
  )
}

export default App
