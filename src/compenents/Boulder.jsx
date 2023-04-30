import React from 'react'
import useFetchBoulder from '../helpers/useFetchBoulder'
import { useNavigate } from 'react-router-dom'

export const Boulder = () => {

  const navigate = useNavigate()


  const data = useFetchBoulder()

  return (

    
    <div>
        <div>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item.id} onClick={() => navigate('/')}>
              <p >{item.localizacion}</p>
            </div>
          
          ))
        ) : (
          <p>No se encontraron datos.</p>
        )}
      </div>
    </div>
  )
}