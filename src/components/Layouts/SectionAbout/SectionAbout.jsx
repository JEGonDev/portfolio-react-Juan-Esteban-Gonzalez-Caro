import React from 'react'
import './SectionAbout.css'
import { NameProfession } from '../../UI/NameProfession/NameProfession'
import { Description } from '../../UI/Description/Description'
import { PhotoPresentation } from '../../UI/PhotoPresentation/PhotoPresentation'
import { NavBarContact } from '../../UI/NavBarContact/NavBarContact'

export const SectionAbout = () => {
  return (
    <>
      <div className="component">
        <div className="presentation-description">
          <NameProfession/>
          <Description/>
        </div>
        <div className="photo">
          <PhotoPresentation/>
        </div>
      </div>
          <NavBarContact variant='contact'/>
    </>
  )
}
