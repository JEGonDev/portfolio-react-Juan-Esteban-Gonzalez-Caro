import React from 'react'
import { NavBarProjects } from '../../UI/NavBarProjects/NavBarProjects'
import { ProjectList } from '../../UI/ProjectList/ProjectList'

export const SectionProjects = () => {
  return (
    <div className='
      animate-fade-down 
      animate-duration-[2000ms]
      pt-16 md:pt-24 lg:pt-28
      pl-6 md:pl-12 lg:pl-64
      pr-6 md:pr-12 lg:pr-64
    '>
      <NavBarProjects/>
      <ProjectList/>
    </div>
  )
}
