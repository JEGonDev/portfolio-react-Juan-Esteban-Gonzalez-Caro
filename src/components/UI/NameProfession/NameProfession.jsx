import React from 'react';

export const NameProfession = () => {
  return (
    <>
      <h1>
        Hola, <span className=''>soy Juan</span><br />
        <span className=''>
          {
            // Envuelve cada letra de "Desarrollador Fullstack" en un <span>
            [...'Desarrollador Fullstack'].map((char, index) => (
              <span key={index}>{char}</span>
            ))
          }
        </span>
      </h1> 
    </>
  );
};
