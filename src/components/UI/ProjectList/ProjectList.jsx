import React from 'react'
import project1 from './../../../assets/screenshots/project1.png'
import project2 from './../../../assets/screenshots/project2.png'
import project3 from './../../../assets/screenshots/project3.png'
import project4 from './../../../assets/screenshots/project4.png'
import project5 from './../../../assets/screenshots/project5.png'

const projects = [
  {
    id: 1,
    title: 'InfoTIC',
    type: 'Frontend',
    description: 'Proyecto desarrollado con React, que proporciona información general sobre horarios, eventos, docentes y cursos disponibles. La aplicación ofrece una interfaz intuitiva y responsiva, permitiendo a los usuarios acceder fácilmente a la información necesaria de manera rápida y eficiente.',
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    image: project1,
    link: ''
  },
  {
    id: 2,
    title: 'API PetShop',
    type: 'Backend',
    description: 'API Rest de una tienda de mascotas, con funcionalidades CRUD y seguridad web implementadas en Spring Boot y Spring Security. Incluye MapStruct para el mapeo eficiente entre entidades y DTOs.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    image: project2,
    link: 'https://github.com/JEGonDev/PetShopAPI-SpringBoot'
  },
  {
    id: 3,
    title: 'E-Commerce',
    type: 'Frontend',
    description: 'Aplicación web que consume una API de productos de una tienda de ropa, mostrando los artículos en tarjetas generadas con JavaScript. Los usuarios pueden agregar productos a un carrito de compras interactivo, ver el total y eliminar artículos según deseen.',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    image: project3,
    link: 'https://e-commerce-eta-gilt.vercel.app/'
  },
  {
    id: 4,
    title: 'API Heladeria',
    type: 'Backend',
    description: 'API Rest de una heladería, con funcionalidades CRUD implementadas en Spring Boot. Se utiliza MapStruct para el mapeo eficiente entre entidades y DTOs.',
    techStack: ['Java', 'Spring Boot', 'MySQL'],
    image: project4,
    link: 'https://github.com/JEGonDev/Heladeria-SpringBoot-React'
  },
  {
    id: 5,
    title: 'Formulario de contacto',
    type: 'Frontend',
    description: 'Formulario de "Contáctenos" desarrollado con JavaScript y Email.js, que permite a los usuarios enviar mensajes directamente desde la aplicación. Incluye validación de campos y confirmación de envío, brindando una experiencia de usuario intuitiva y eficiente.',
    techStack: ['JavaScript', 'HTML5', 'CSS5'],
    image: project5,
    link: 'https://formlario-contactenos-email-js.vercel.app/'
  },
]

export const ProjectList = ({ selectedType }) => {

  let filteredProjects

  selectedType === 'Todos' 
  ? filteredProjects = projects 
  : filteredProjects = projects.filter((project) => project.type === selectedType)

  return (
    <>
      {filteredProjects.map(project => (
        <div 
        key={project.id} 
        className='
          rounded-2xl 
          bg-customGray4 
          p-5 md:p-10 
          mb-8 md:mb-12
        '>
          <>
            <h5 className='text-customYellow1 text-lg md:text-xl font-semibold mb-4 md:mb-6'>{project.type}</h5>
            <h3 className='font-semibold text-xl md:2xl mb-4 md:mb-6'>{project.title}</h3>
            <p className='text-base md:text-lg lg:text-xl leading-6 lg:leading-7 mb-4 md:mb-6'>{project.description}</p>
            <i className='text-customYellow1 font-semibold text-base md:text-lg lg:text-xl'>{project.techStack.join(' || ')}</i>
            <a href={project.link}>
              <img src={project.image} alt={project.title} className='mt-4 md:mt-6 rounded-2xl h' />
            </a>
          </>
      </div>
      ))}
    </>
  )
}
