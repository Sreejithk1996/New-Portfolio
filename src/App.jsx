import React from 'react'
import "../src/styles/App.scss"
import MainSection from './components/main-section/MainSection';
import MySkills from './components/my-skills/MySkills';

function App() {
  return (
    <div className='portfolio'>
    <MainSection/>
    <MySkills/>
    </div>
  )
}

export default App
