import React, {useState} from 'react'
import { IntroductionProjects } from './../IntroductionProjects/IntroductionProjects'
import { ItemNavBar } from './../ItemNavBar/ItemNavBar'
import { ProjectList } from '../ProjectList/ProjectList'

export const NavBarProjects = () => {
  
  const [selectedType, setSelectedType] = useState('Todos') // estado por defecto

  const select = (type) => {
    setSelectedType(type) // actualiza el estado
  }

  const typeProject = [
    {text: 'Todos'},
    {text: 'Frontend'},
    {text: 'Backend'},
  ]

  return (
    <>
      <IntroductionProjects/>
      <div className=''>
        {typeProject.map((type, index) => (
          <ItemNavBar 
            key={index} 
            text={type.text} 
            onClick={() => select(type.text)}
            variant='projects'
          />
        ))}
      </div>
      <ProjectList selectedType={selectedType}/> {/* Renderiza la lista de proyectos filtrada */}
    </>
  )
}
