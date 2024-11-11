import React from 'react'
import { NameProfession } from '../../UI/NameProfession/NameProfession'
import { Description } from '../../UI/Description/Description'
import { PhotoPresentation } from '../../UI/PhotoPresentation/PhotoPresentation'
import { NavBarContact } from '../../UI/NavBarContact/NavBarContact'

export const SectionAbout = () => {
  return (
    <div className='
      bg-customGray2
      pt-16 md:pt-24 lg:pt-28
      pb-16 md:pb-24 lg:pb-28
      pl-6 md:pl-12 lg:pl-64
      pr-6 md:pr-12 lg:pr-64
    '>
      <div className='md:flex items-center'>
        <div className='md:w-2/3 lg:w-3/4 animate-fade-right'>
          <NameProfession/>
          <Description/>
        </div>
        <div className='md:w-1/3 lg:w-1/4 animate-fade-left'>
          <PhotoPresentation/>
        </div>
      </div>
          <NavBarContact/>
    </div>
  )
}
