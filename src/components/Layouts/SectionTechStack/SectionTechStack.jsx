import React from 'react'
import './SectionTechStack.css'
import { TechStack } from '../../UI/TechStack/TechStack'
import { IntroductionTechStack } from '../../UI/IntroductionTechStack/IntroductionTechStack'

export const SectionTechStack = () => {
  return (
    <>
      <div>
        <IntroductionTechStack/>
      </div>
      <div className='section-tech'>
        <TechStack/>
      </div>
    </>
  )
}
