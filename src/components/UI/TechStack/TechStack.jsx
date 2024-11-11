import React from 'react'
import { ItemIcon } from '../ItemIcon/ItemIcon'

// iconos backend
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSqlite } from "react-icons/si";

// iconos frontend
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";

// iconos herramientas
import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

export const listStack = {
  backend: [
    { name: 'Java', icon: FaJava },
    { name: 'Spring', icon: SiSpring },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'Spring Security', icon: SiSpringsecurity },
    { name: 'MySQL', icon: GrMysql },
    { name: 'SQLite', icon: SiSqlite },
  ],

  frontend: [
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'React', icon: FaReact },
    { name: 'Tailwind CSS', icon: RiTailwindCssFill },
    { name: 'Angular', icon: FaAngular },
  ],

  tools: [
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Git Branching', icon: IoIosGitBranch },
    { name: 'Postman', icon: SiPostman },
    { name: 'Vercel', icon: IoLogoVercel },
    { name: 'npm', icon: FaNpm },
    { name: 'Figma', icon: FaFigma },
    { name: 'VS Code', icon: SiVisualstudiocode },
    { name: 'IntelliJ IDEA', icon: SiIntellijidea },
    { name: 'Eclipse', icon: SiEclipseide },
  ]
}


export const TechStack = () => {
  return (
    <div className='mt-8 md:pl-20 md:pr-20'>
      <section className='bg-customGray4 rounded-2xl p-4 pb-8 mb-8'>
        <h2 className='font-semibold text-customYellow1 text-center pb-6'>Backend</h2>
          <div className='flex flex-wrap gap-8 justify-center'>
            {listStack.backend.map((tech, index) => (
              <ItemIcon key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
      </section>

      <section className='bg-customGray4 rounded-2xl p-4 pb-8 mb-8'>
        <h2 className='font-semibold text-customYellow1 text-center pb-6'>Frontend</h2>
          <div className='flex flex-wrap gap-8 justify-center'>
            {listStack.frontend.map((tech, index) => (
              <ItemIcon key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
      </section>

      <section className='bg-customGray4 rounded-2xl p-4 pb-8 mb-8'>
        <h2 className='font-semibold text-customYellow1 text-center pb-6'>Herramientas</h2>
          <div className='flex flex-wrap gap-8 justify-center'>
            {listStack.tools.map((tech, index) => (
              <ItemIcon key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </section>
    </div>
  )
}
