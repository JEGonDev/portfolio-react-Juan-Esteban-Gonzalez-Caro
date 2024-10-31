import React from 'react'
import { TechStack } from '../../UI/TechStack/TechStack'
import { IntroductionTechStack } from '../../UI/IntroductionTechStack/IntroductionTechStack'

export const SectionTechStack = () => {
  return (
    <>
      <div>
        <IntroductionTechStack/>
      </div>
      <div className=''>
        <TechStack/>
      </div>
    </>
  )
}
