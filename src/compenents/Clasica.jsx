import { useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import '../Main.css'
import escaldaClasica from '../assets/img/escaldaClasica.jpg'
import useFetchClasica from '../hooks/useFetchClasica'
import { Footer } from './Footer'


/**
 * Componente que muestra las rutas de tipo clasica.
 * @returns {JSX.Element} Elemento JSX que contiene el listado de rutas de tipo clasica.
 */

export const Clasica = () => {

  const {user} = useParams()
  console.log(user)
    
    const navigate = useNavigate()

 /**
   * Hook personalizado que utiliza la función 'useEffect' para realizar una petición HTTP a la API y obtener los datos de las rutas de tipo clasica.
   * @param {string} url URL de la API a la que se hace la petición HTTP.
   * @returns {Array|undefined} Array de objetos con los datos de las rutas de tipo claisica o undefined si la petición HTTP no ha finalizado.
   */

    const data = useFetchClasica('http://localhost:4500/api/routes/clasica')

  
  return (

    <div className=" inset-0 bg-orange-300 p-10 ">
    <div className="bg-orange-300 p-10 mt-20">
    <h1 className="text-2xl font-bold mb-4">Clasica</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.isArray(data) ? (
        data.map((item) => (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-lg cursor-pointer"
            key={item.info_id}
            onClick={() => navigate(`/rutas/clasica/description/${item.info_id}`)}
          >
            <p className="text-lg font-semibold p-4">{item.localizacion}</p>
            <img
              className="w-full h-100 object-fit-cover"
              src={escaldaClasica}
              alt="claisca"
            />
          </div>
        ))
      ) : (
        <p>No se encontraron datos.</p>
      )}
    </div>
  </div>
    <div className='mt-60'>
    </div>
    </div>
   

  )
}
