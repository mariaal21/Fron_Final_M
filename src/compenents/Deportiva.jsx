import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchDeportiva from '../helpers/useFetchDeportiva'



export const Deportiva = () => {



  const navigate = useNavigate()


  const data = useFetchDeportiva()

  return (
    <div><h1>Deportiva</h1>

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
