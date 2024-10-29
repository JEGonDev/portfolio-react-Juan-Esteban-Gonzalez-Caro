import React from 'react'
import './ItemNavBar.css'

export const ItemNavBar = ({link , text, icon: Icon, variant, onClick}) => {
  return (
    <li className='list'>
      <a 
        href={link} 
        className={`custom-item ${variant}`} 
        onClick={onClick}
      >
        {Icon && <Icon className="nav-icon" />} {/*}Renderiza el icono solo si existe*/}
        {text}
      </a>
    </li>
  )
}
