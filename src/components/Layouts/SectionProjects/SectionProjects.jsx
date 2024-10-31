import React from 'react'
import { NavBarProjects } from '../../UI/NavBarProjects/NavBarProjects'
import { ProjectList } from '../../UI/ProjectList/ProjectList'

export const SectionProjects = () => {
  return (
    <section>
      <div className=''>
        <NavBarProjects/>
        <ProjectList/>
      </div>
    </section>
  )
}
