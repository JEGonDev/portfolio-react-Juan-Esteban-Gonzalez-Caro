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
      h-24 md:h-28 lg:h-32 
      px-5 md:px-20 lg:px-60
    '
    >
      <NameDev/>
      <NavBarAbout/>
    </header>
  )
}
