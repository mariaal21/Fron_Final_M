import { useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import useFetchClasica from '../helpers/useFetchClasica'



export const Clasica = () => {

  const {user} = useParams()
  console.log(user)
    
    const navigate = useNavigate()

    const data = useFetchClasica('http://localhost:4500/api/routes/clasica')

    

  return (
    <div> <h1 className='TiposNombre'>Clasica</h1>
    
    <div>
        <div>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item.info_id} onClick={() => navigate(`/rutas/clasica/description/${item.info_id}`)}>
              <p className='localizacion'on >{item.localizacion}</p>
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
