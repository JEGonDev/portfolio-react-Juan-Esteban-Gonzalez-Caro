import React from 'react'

export const ItemIcon = ({ icon: Icon, name }) => {
    return (
        <div className='flex flex-col items-center w-20 md:w-28 lg:w-32'>
            {Icon && (
                <i className='flex items-center justify-center'>
                    <Icon className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16' />
                </i>
            )}
            <p className='font-semibold text-center text-base md:text-lg lg:text-xl mt-2'>{name}</p>
        </div>
    )
}
