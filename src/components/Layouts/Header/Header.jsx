import React from 'react'
import { NavBarAbout } from '../../UI/NavBarAbout/NavBarAbout'
import { NameDev } from '../../UI/NameDev/NameDev'

export const Header = () => {
  return (
    <header>
      <NameDev/>
      <NavBarAbout variant='about'/>
    </header>
  )
}
