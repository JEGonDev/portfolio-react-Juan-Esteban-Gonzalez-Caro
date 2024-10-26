import React from 'react'
import { NavBarProjects } from '../../UI/NavBarProjects/NavBarProjects'
import { ProjectList } from '../../UI/ProjectList/ProjectList'
import './SectionProjects.css'

export const SectionProjects = () => {
  return (
    <section>
      <div className='my-projects'>
        <NavBarProjects variant='projects'/>
        <ProjectList/>
      </div>
    </section>
  )
}
