import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchClasica from '../helpers/useFetchClasica'


export const Clasica = () => {



  const navigate = useNavigate()


  const data = useFetchClasica()


  return (
    <div> <h1>Clasica</h1>
    
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
    </div>
  )
}
