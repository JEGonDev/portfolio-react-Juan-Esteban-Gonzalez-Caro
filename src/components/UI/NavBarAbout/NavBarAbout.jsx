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
        <ul className=''>
        {navItems.map((item, index) => (
          <ItemNavBar 
            key={index}
            link={item.link} 
            text={item.text} 
          />
        ))}</ul>
    </nav>
  )
}
