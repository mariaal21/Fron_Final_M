import React from 'react'
import useFetchBoulder from '../helpers/useFetchBoulder'
import { useNavigate } from 'react-router-dom'
import Comments from './Comments'

export const Boulder = () => {

  const navigate = useNavigate()


  const data = useFetchBoulder()

  return (

    
    <div>
    <h1 className='TiposNombre'>Boulder</h1>
        <div>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item.id} onClick={() => navigate('/')}>
              <p  className='localizacion'>{item.localizacion}</p>
            </div>
          
          ))
        ) : (
          <p>No se encontraron datos.</p>
        )}
      </div>
      <div>
        {/* <Comments currentUserId="1"/> */}
      </div>
    </div>
  )
}
