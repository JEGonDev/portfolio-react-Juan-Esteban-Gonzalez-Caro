import React from 'react'

export const ContentFooter = () => {
  return (
    <div className='flex justify-between gap-6 text-customYellow1'>
      <h4 className='text-xs lg:text-base leading-5'>
        Desarrollado por Juan Esteban Gonzalez Caro
        <p className='text-xs lg:text-base leading-5'>
          Correo: juanestebangonzalezcaro567@gmail.com <br />
          Telefono: +57 322 545 8579
        </p>
      </h4>

      <h4 className='text-xs lg:text-base leading-5'>
        Portafolio creado con React, TailwindCSS, JavaScript, HTML5 y CSS3
      </h4>
    </div>
  )
}
