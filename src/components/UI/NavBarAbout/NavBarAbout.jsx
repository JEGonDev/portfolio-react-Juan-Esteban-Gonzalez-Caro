import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar';
import './NavBarAbout.css'

const navItems = [
  { link: '#home', text: 'Inicio' },
  { link: '#contact', text: 'Contacto' },
  { link: '#services', text: 'Proyectos' },
  { link: '#stack', text: 'Tech Stack' },
];

export const NavBarAbout = () => {
  return (
    <nav>
        <ul className='items-about'>
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
