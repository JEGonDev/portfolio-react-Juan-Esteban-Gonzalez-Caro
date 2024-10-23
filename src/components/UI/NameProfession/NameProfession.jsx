import React from 'react';
import './NameProfession.css';

export const NameProfession = () => {
  return (
    <>
      <h1>
        Hola, <span className='name-color'>soy Juan</span><br />
        <span className="profession-low">
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
