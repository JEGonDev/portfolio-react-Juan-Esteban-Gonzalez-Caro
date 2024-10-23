import React from 'react'
import './ItemNavBar.css'

export const ItemNavBar = ({link , text}) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}
