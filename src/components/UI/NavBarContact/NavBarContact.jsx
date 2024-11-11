import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md"
import { PiReadCvLogoFill } from "react-icons/pi"
import { FaWhatsapp } from "react-icons/fa";

export const NavBarContact = () => {

  const contactItems = [
    { icon: PiReadCvLogoFill, 
      text: 'Ver CV', 
      link: 'https://drive.google.com/file/d/1SBV2jHNyh-ODPJMbuibESzpBRvy5zoq2/view'},
    { icon: FaLinkedin, 
      text: 'Linkedin', 
      link: 'https://www.linkedin.com/in/juan-esteban-gonz%C3%A1lez-caro-41330b25b/'},
    { icon: FaGithub, 
      text: 'GitHub', 
      link: 'https://github.com/JEGonDev'},
    { icon: FaWhatsapp, 
      text: 'Whatsapp', 
      link: 'https://wa.me/573225458579' },
    { icon: MdOutgoingMail, 
      text: 'juanestebangonzalezcaro567@gmail.com', 
      link: 'https://mail.google.com/mail/?view=cm&to=juanestebangonzalezcaro567@gmail.com' },
  ]

  return (
    <nav className='
      animate-flip-up
    '>
      <h2 className='
      text-customYellow1
        pb-4
        font-semibold
      '>Contactame
      </h2>

      <ul className='
        md:flex 
        md:gap-2 lg:gap-6
      '>
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
