import React from 'react'

export const ItemNavBar = ({link , text, icon: Icon, variant, onClick}) => {
  return (
    <li className=''>
      <a 
        href={link}
        className=''
        onClick={onClick}
      >
        {Icon && <Icon className='' />} {/*}Renderiza el icono solo si existe*/}
        {text}
      </a>
    </li>
  )
}
