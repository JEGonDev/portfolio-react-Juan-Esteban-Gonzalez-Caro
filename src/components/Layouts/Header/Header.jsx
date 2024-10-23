import React from 'react'
import { NavBar } from '../../UI/NavBar/NavBar'
import { NameDev } from '../../UI/NameDev/NameDev'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <NameDev/>
      <NavBar/>
    </header>
  )
}
