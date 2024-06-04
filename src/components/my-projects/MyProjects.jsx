import React from 'react'
import "../../styles/MyProjects.scss"
import {projects} from "../../utilities/projects"
import open from "../../assets/images/export.png"

function MyProjects() {
  return (
    <div className='my-projects'>
        <div className='title-3'>
            <p>My <label>Projects</label></p>
        </div>
        <div className='project-list'>
            {
                projects.map((list)=>{
                    return(
                        <div className={list.class} key={list.id}>
                            <div className='project-section-1'>
                                <img src={list.img} alt="" />
                            </div>
                            <div className='project-section-2'>
                                <p className='project-id'>{list.num}</p>
                                <p className='project-title'>{list.title}</p>
                                <p className='project-details'>{list.details}</p>
                                <a href="https://metrictreelabs.com/" target='blank'><img src={open} alt="" /></a>
                            </div>
                        </div>
                    )
                })
            }
        </div>      
    </div>
  )
}

export default MyProjects
