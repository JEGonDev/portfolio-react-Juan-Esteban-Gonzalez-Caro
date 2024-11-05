import React from 'react'
import { NavBarAbout } from '../../UI/NavBarAbout/NavBarAbout'
import { NameDev } from '../../UI/NameDev/NameDev'

export const Header = () => {
  return (
    <header 
    className='
    bg-customGray3 
      flex 
      justify-between 
      items-center 
      h-20 md:h-24 lg:h-28 
      px-5 md:px-20 lg:px-60
      z-50
    '
    >
      <NameDev/>
      <NavBarAbout/>
    </header>
  )
}
