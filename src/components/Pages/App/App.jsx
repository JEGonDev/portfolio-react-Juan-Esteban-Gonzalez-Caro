import { Header } from '../../Layouts/Header/Header'
import { SectionAbout } from '../../Layouts/SectionAbout/SectionAbout'
import { SectionProjects } from '../../Layouts/SectionProjects/SectionProjects'
import './App.css'

export const App = () => {
  return (
    <>
      <Header/>
      <SectionAbout/>
      <SectionProjects/>
    </>
  )
}
