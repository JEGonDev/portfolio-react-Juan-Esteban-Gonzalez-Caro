import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { SectionAbout } from '../../Layouts/SectionAbout/SectionAbout'
import { SectionProjects } from '../../Layouts/SectionProjects/SectionProjects'
import { SectionTechStack } from '../../Layouts/SectionTechStack/SectionTechStack'
import './App.css'

export const App = () => {
  return (
    <div id='home'>
      <Header/>
      <div id='contact'> <SectionAbout/> </div>
      <div id='services'> <SectionProjects/> </div>
      <div id='stack'> <SectionTechStack/> </div>
      <Footer/>
    </div>
  )
}
