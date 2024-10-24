import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar';
import './NavBarAbout.css'

const navItems = [
  { link: '#home', text: 'Inicio' },
  { link: '#about', text: 'Sobre mi' },
  { link: '#services', text: 'Proyectos' },
  { link: '#stack', text: 'Tech Stack' },
  { link: '#contact', text: 'Contacto' },
];

export const NavBarAbout = () => {
  return (
    <nav>
        <ul className='items-about'>
        {navItems.map(item => (
          <ItemNavBar 
            link={item.link} 
            text={item.text} 
            variant='about'
            />
        ))}</ul>
    </nav>
  )
}
