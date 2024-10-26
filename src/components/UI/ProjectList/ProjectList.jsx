import React from 'react'
import './ProjectList.css'
import project1 from './../../../assets/screenshots/project1.png'

const projects = [
  {
    id: 1,
    title: 'API PetShop',
    type: 'Backend',
    description: 'API Rest de una tienda de mascotas, CRUD y seguridad web con Spring Boot y Spring Security',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project1,
  },
  {
    id: 2,
    title: 'API PetShop',
    type: 'Frontend',
    description: 'API Rest de una tienda de mascotas, CRUD y seguridad web con Spring Boot y Spring Security',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project1,
  },
  {
    id: 3,
    title: 'API PetShop',
    type: 'Frontend',
    description: 'API Rest de una tienda de mascotas, CRUD y seguridad web con Spring Boot y Spring Security',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project1,
  },
  {
    id: 4,
    title: 'API PetShop',
    type: 'Backend',
    description: 'API Rest de una tienda de mascotas, CRUD y seguridad web con Spring Boot y Spring Security',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project1,
  },
  {
    id: 5,
    title: 'API PetShop',
    type: 'Frontend',
    description: 'API Rest de una tienda de mascotas, CRUD y seguridad web con Spring Boot y Spring Security',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project1,
  },
  {
    id: 6,
    title: 'API PetShop',
    type: 'Backend',
    description: 'API Rest de una tienda de mascotas, CRUD y seguridad web con Spring Boot y Spring Security',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project1,
  }
]

export const ProjectList = ({ selectedType }) => {

  let filteredProjects

  if (selectedType === 'Todos') {
    filteredProjects = projects
  } else {
    filteredProjects = projects.filter((project) => project.type === selectedType)
  }

  return (
    <div className="project-list">
      {filteredProjects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-info">
            <h5 className='type-project'>{project.type}</h5>
            <h3 className='name-project'>{project.title}</h3>
            <p className='description-project'>{project.description}</p>
          </div>
          <img src={project.image} alt={project.title} className="project-image" />
      </div>
      ))}
    </div>
  )
}
