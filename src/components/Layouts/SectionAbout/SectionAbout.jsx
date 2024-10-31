import React from 'react'
import { NameProfession } from '../../UI/NameProfession/NameProfession'
import { Description } from '../../UI/Description/Description'
import { PhotoPresentation } from '../../UI/PhotoPresentation/PhotoPresentation'
import { NavBarContact } from '../../UI/NavBarContact/NavBarContact'

export const SectionAbout = () => {
  return (
    <>
      <div className=''>
        <div className=''>
          <NameProfession/>
          <Description/>
        </div>
        <div className=''>
          <PhotoPresentation/>
        </div>
      </div>
          <NavBarContact/>
    </>
  )
}
