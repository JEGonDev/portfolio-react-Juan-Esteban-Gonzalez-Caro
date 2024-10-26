import React from 'react'
import './ItemNavBar.css'

export const ItemNavBar = ({link , text, icon: Icon, variant, onClick}) => {
  return (
    <li>
      <a 
        href={link} 
        className={`custom-item ${variant}`} 
        onClick={onClick}
      >
        {Icon && <Icon className="nav-icon" />} {/* Condicional para renderizar o no el ícono */}
        {text}
      </a>
    </li>
  )
}
