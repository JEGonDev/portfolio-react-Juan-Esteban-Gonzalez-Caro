import React from 'react';

export const NameProfession = () => {
  return (
    <div className='pb-6'>
      <h1 className='
        text-4xl md:text-5xl lg:text-5xl
        font-semibold
        '>
        Hola, <span className='text-customYellow1'>soy Juan</span><br />
        <div className='mt-1'>
          <span className='text-xl md:text-2xl lg:text-2xl'>
            {
              // Envuelve cada letra de "Desarrollador Fullstack" en un <span>
              [...'Desarrollador Fullstack'].map((char, index) => (
                <span 
                  key={index}
                  className='animate-fade'
                  style={{ animationDelay: `${index * 0.1}s`}}
                  >
                  {char}
                </span>
              ))
            }
          </span>
        </div>
      </h1> 
    </div>
  );
};
