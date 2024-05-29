import React from 'react'
import "../../styles/MyExperience.scss"
import { experience } from '../../utilities/experience'
import construction from "../../assets/images/construction-and-tools.png"
import executive from "../../assets/images/business-man_7158831.png"
import arrow from "../../assets/images/arrow-right-solid.svg"
import { newExperience } from '../../utilities/newExperience'

function MyExperience() {
  return (
    <div className='my-experience'>
        <div className='title-1'>
            <p>My <label>Experience</label></p>
        </div>

        <div className='new-experience'>
            {
                newExperience.map((comp)=>{
                    return(
                        <div className={comp.class} key={comp.id}>
                            <div className='company-section-1'> 
                                <div className='section-1-a'>
                                    <div className='comp-logo'>
                                        <img src={comp.icon} alt="" />
                                    </div>
                                    <p>{comp.position}</p>
                                </div>
                                <div className='secton-1-b'>
                                    <p>{comp.date}</p>
                                </div>
                            </div>
                            <div className='company-section-2'>
                                <p>{comp.role}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='career'>
            <img src={construction} alt="" />
            <img src={arrow} alt="" />
            <p>Career Transition</p>
            <img src={arrow} alt="" />
            <img src={executive} alt="" />
        </div>

        <div className='experience'>
            {
                experience.map((comp)=>{
                    return(
                        <div className={comp.class} key={comp.id}>
                            <div className='company-section-1'> 
                                <div className='section-1-a'>
                                    <div className='comp-logo'>
                                        <img src={comp.icon} alt="" />
                                    </div>
                                    <p>{comp.position}</p>
                                </div>
                                <div className='secton-1-b'>
                                    <p>{comp.date}</p>
                                </div>
                            </div>
                            <div className='company-section-2'>
                                <p>{comp.role}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MyExperience

