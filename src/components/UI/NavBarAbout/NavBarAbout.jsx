import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar';

const navItems = [
  { link: '#home', text: 'Inicio' },
  { link: '#contact', text: 'Contacto' },
  { link: '#services', text: 'Proyectos' },
  { link: '#stack', text: 'Tech Stack' },
];

export const NavBarAbout = () => {
  return (
    <nav>
        <ul className='
          flex
          gap-2 md:gap-5 lg:gap-10
          text-sm md:text-base lg:text-lg
        '>
        {navItems.map((item, index) => (
          <ItemNavBar 
            key={index}
            link={item.link} 
            text={item.text} 
            variant='about'
          />
        ))}</ul>
    </nav>
  )
}
