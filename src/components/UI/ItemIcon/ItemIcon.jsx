import React from 'react'
import './ItemIcon.css'

export const ItemIcon = ({icon: Icon, name}) => {
  return (
    <div className='icons'>
      {Icon && (
        <i><Icon className='icon-style'/></i>
      )}
      <p>{name}</p>
    </div>
  )
}
