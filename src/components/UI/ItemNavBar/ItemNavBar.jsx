import React from 'react'
import './ItemNavBar.css'

export const ItemNavBar = ({link , text, icon: Icon, variant}) => {
  return (
    <li>
      <a href={link} className={`custom-item ${variant}`}>
        {Icon && <Icon className="nav-icon" />} {/* Condicional para renderizar o no el ícono */}
        {text}
      </a>
    </li>
  )
}
