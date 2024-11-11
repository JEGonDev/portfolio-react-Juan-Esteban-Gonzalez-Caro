import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { SectionAbout } from '../../Layouts/SectionAbout/SectionAbout'
import { SectionProjects } from '../../Layouts/SectionProjects/SectionProjects'
import { SectionTechStack } from '../../Layouts/SectionTechStack/SectionTechStack'

export const App = () => {
  return (
    <div 
      id='home' 
      className='
        bg-customGray1 
        mr-0 
        p-0 
        font-sans 
        text-xl
      text-customWhite1 
        overflow-x-hidden
        '
      >
      <Header/>
      <div id='contact' className='mt-16 md:mt-24'> <SectionAbout/> </div>
      <div id='services'> <SectionProjects/> </div>
      <div id='stack' > <SectionTechStack/> </div>
      <Footer/>
    </div>
  )
}
