import React from 'react'
import "../src/styles/App.scss"
import MainSection from './components/main-section/MainSection';
import MySkills from './components/my-skills/MySkills';
import MyExperience from './components/my-experience/MyExperience';
import AboutMe from './components/about-me/AboutMe';
import MyProjects from './components/my-projects/MyProjects';
import ContactForm from './components/contact-form/ContactForm';
import Footer from './components/footer/Footer';
import MyBlogs from './components/my-blogs/MyBlogs';

function App() {
  return (
    <div className='portfolio'>
    <MainSection/>
    <MySkills/>
    <MyExperience/>
    <AboutMe/>
    <MyProjects/>
    <MyBlogs/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default App
