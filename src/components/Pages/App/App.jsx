import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { SectionAbout } from '../../Layouts/SectionAbout/SectionAbout'
import { SectionProjects } from '../../Layouts/SectionProjects/SectionProjects'
import { SectionTechStack } from '../../Layouts/SectionTechStack/SectionTechStack'
import './App.css'

export const App = () => {
  return (
    <>
      <Header id='home'/>
      <SectionAbout id='contact'/>
      <SectionProjects id='services'/>
      <SectionTechStack id='stack'/>
      <Footer/>
    </>
  )
}
