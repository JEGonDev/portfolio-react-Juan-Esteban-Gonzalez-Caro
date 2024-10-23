import React from 'react'
import './SectionAbout.css'
import { NameProfession } from '../../UI/NameProfession/NameProfession'
import { Description } from '../../UI/Description/Description'
import { PhotoPresentation } from '../../UI/PhotoPresentation/PhotoPresentation'

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
    </>
  )
}