import React from 'react'
import './NavBarContact.css'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar'
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { MdOutgoingMail } from "react-icons/md"
import { PiReadCvLogoFill } from "react-icons/pi"

export const NavBarContact = () => {

  const contactItems = [
    { icon: PiReadCvLogoFill, 
      text: 'Descargar CV', 
      link: 'https://drive.google.com/uc?export=download&id=1SBV2jHNyh-ODPJMbuibESzpBRvy5zoq2'},
    { icon: FaLinkedin, 
      text: 'Linkedin', 
      link: 'https://www.linkedin.com/in/juan-esteban-gonz%C3%A1lez-caro-41330b25b/'},
    { icon: FaGithubSquare, 
      text: 'GitHub', 
      link: 'https://github.com/JEGonDev'},
    { icon: MdOutgoingMail, 
      text: 'juanestebangonzalezcaro567@gmail.com', 
      link: 'https://mail.google.com/mail/?view=cm&to=juanestebangonzalezcaro567@gmail.com' },
  ]

  return (
    <nav>
      <ul className='items-contact'>
        {contactItems.map((item, index) => (
          <ItemNavBar 
            key={index} 
            icon={item.icon}
            text={item.text}
            link={item.link}
            variant='contact'
          />
        ))}
      </ul>
    </nav>
  )
}
