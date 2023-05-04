import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchDeportiva from '../helpers/useFetchDeportiva'
import Comments from './Comments'

export const Deportiva = () => {



  const navigate = useNavigate()


  const data = useFetchDeportiva()

  return (
    <div><h1 className='TiposNombre'>Deportiva</h1>

    <div>
     <div>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item.id} onClick={() => navigate('/')}>
              <p className='localizacion'>{item.localizacion}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron datos.</p>
        )}
      </div>
    </div>
    <div>
        {/* <Comments currentUserId="1"/> */}
    </div>        
    </div>
  )
}
