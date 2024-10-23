import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar';
import './NavBar.css'

const navItems = [
  { link: '#home', text: 'Inicio' },
  { link: '#about', text: 'Sobre mi' },
  { link: '#services', text: 'Proyectos' },
  { link: '#stack', text: 'Tech Stack' },
  { link: '#contact', text: 'Contacto' },
];

export const NavBar = () => {
  return (
    <nav>
      <ul>{navItems.map(item => (
        <ItemNavBar link={item.link} text={item.text}/>
      ))}</ul>
    </nav>
  )
}
