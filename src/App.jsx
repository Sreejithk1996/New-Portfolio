import React from 'react'
import "../src/styles/App.scss"
import MainSection from './components/main-section/MainSection';
import MySkills from './components/my-skills/MySkills';
import MyExperience from './components/my-experience/MyExperience';

function App() {
  return (
    <div className='portfolio'>
    <MainSection/>
    <MySkills/>
    <MyExperience/>
    </div>
  )
}

export default App
