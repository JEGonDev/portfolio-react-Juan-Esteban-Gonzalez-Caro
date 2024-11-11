import React from 'react'
import { TechStack } from '../../UI/TechStack/TechStack'
import { IntroductionTechStack } from '../../UI/IntroductionTechStack/IntroductionTechStack'

export const SectionTechStack = () => {
  return (
    <div className='
      animate-fade-down 
      animate-duration-[2000ms]
      pt-16 md:pt-24 lg:pt-28
      pb-16 md:pb-24 lg:pb-28
      pl-6 md:pl-12 lg:pl-64
      pr-6 md:pr-12 lg:pr-64
    '>
        <IntroductionTechStack/>
        <TechStack/>
    </div>
  )
}
