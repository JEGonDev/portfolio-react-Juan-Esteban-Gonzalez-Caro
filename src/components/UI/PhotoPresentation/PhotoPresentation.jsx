import React from 'react'
import myPhoto from './../../../assets/images/photoPresentation.jpg'

export const PhotoPresentation = () => {
  return (
    <div className='
      flex 
      justify-center 
      items-center 
      pt-4 
      pb-6
      md:ml-8
    '>
      <img className='
        w-[4cm]
        h-[5cm]
        rounded-3xl
      ' src={myPhoto} />
    </div>
  )
}
