import React from 'react'

export const ItemIcon = ({icon: Icon, name}) => {
  return (
    <div className=''>
      {Icon && (
        <i><Icon className=''/></i>
      )}
      <p>{name}</p>
    </div>
  )
}
