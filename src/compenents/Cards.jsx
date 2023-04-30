import React from 'react'
import '../Main.css'


export const Cards = () => {


  return (
    <>  
            <div className='card'>
            <div className='card-image'>
                <img src={clasica} alt="" />
            </div>
            <div>
                <p className='card-title'>Clásica</p>
                <p className='description'>Descripción</p>
                <button> Ver más </button>
            </div>                
            </div>      
    </>    
  )
}

