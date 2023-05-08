import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react';
import useFetchInfoBoulder from '../helpers/useFetchInfoBoulder';


/**
 * Componente que muestra la descripción de una ruta y permite reservarla si el usuario está autenticado.
 * @returns {JSX.Element}
 */

export const InfoRutasBoulder = () => {

  const [data, setData] = useState([]);

    
const {info_id} = useParams()

console.log(info_id)

  const navigate = useNavigate()

const datos = useFetchInfoBoulder(info_id, data, setData)

const mapeo = datos.map(dato => dato.descripcion)

const mapeotitulo = datos.map(dato => dato.titulo)

const mapeonivel = datos.map(dato => dato.nivel)


console.log(mapeo + "este es data info rutas")


const { isAuthenticated } = useAuth0();
 
  return (
 <>
<div className="max-w-4xl mx-auto my-8 mt-20 ">
  <h1 className="text-4xl font-bold mb-4">{mapeotitulo}</h1>
  <p className="text-gray-700 text-xl mb-8">{mapeo}</p>
  
  <div className="flex items-center mb-8">
    <p className="text-lg font-medium mr-4">Nivel de dificultad:</p>
    <span className="text-green-500">{mapeonivel}</span>
  </div>

  {isAuthenticated && 
    <div className="flex justify-center">
      <Link to="/rutas/boulder/description/:info_id/reservar" className="py-4 px-8 bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">Reservar</Link>
    </div>
  }
</div>

 </>

      
  )
}
