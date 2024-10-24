import React from 'react'
import './ContactBar.css'
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { MdOutgoingMail } from "react-icons/md"
import { ContactButton } from '../ContactButton/ContactButton'

const contactItems = [
  { icon: FaLinkedin, text: 'Linkedin', link: 'https://www.linkedin.com/in/juan-esteban-gonz%C3%A1lez-caro-41330b25b/'},
  { icon: FaGithubSquare, text: 'GitHub', link: 'https://github.com/JEGonDev'},
  { icon: MdOutgoingMail, text: 'juanestebangonzalezcaro567@gmail.com', link: 'https://mail.google.com/mail/?view=cm&to=juanestebangonzalezcaro567@gmail.com' },
]

export const ContactBar = () => {
  return (
    <li>
      {contactItems.map(item, index => (
        <ContactButton 
          key={index} 
          icon={item.icon}
          text={item.text}
          link={item.link}
          />
      ))}
    </li>
  )
}
