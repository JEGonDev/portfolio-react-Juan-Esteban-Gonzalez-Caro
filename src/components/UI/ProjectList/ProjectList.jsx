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
]

export const ProjectList = () => {
  return (
    <div>ProjectList</div>
  )
}
