import React from 'react'

export const ContactButton = ({icon, text, link}) => {
  return (
    <button>
      {icon}
      {text}
      <a href={link} />
    </button> // Es un a , el boton sobra no debe ser boton
  )
}
