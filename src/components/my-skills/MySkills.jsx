import React from 'react'
import "../../styles/MySkills.scss"
import {skills} from '../../utilities/skills'

function MySkills() {
  return (
    <div className='my-skills'>
        <div className='title'>
            <p>My <label>Skills</label></p>
        </div>
        <div className='skills'>
            {
                skills.map(skill => {
                    return(
                        <a href={skill.link} target='blank'>
                        <div className={skill.class} key={skill.id}>
                            <img src={skill.icon} alt="" />
                            <p>{skill.name}</p>
                        </div>
                        </a>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default MySkills

