import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";
import { Progress } from 'reactstrap'
import '../Main.css'
import useFetchInfoDeportiva from '../helpers/useFetchInfoDeportiva';


/**
 * Componente que muestra la descripción de una ruta y permite reservarla si el usuario está autenticado.
 * @returns {JSX.Element}
 */

export const InfoRutasDeportiva = () => {

  const [data, setData] = useState([]);

    
const {info_id} = useParams()

console.log(info_id)



  const navigate = useNavigate()




const datos = useFetchInfoDeportiva(info_id, data, setData)

const mapeo = datos.map(dato => dato.descripcion)

const mapeotitulo = datos.map(dato => dato.titulo)

const mapeonivel = datos.map(dato => dato.nivel)


console.log(mapeo + "este es data info rutas")

const { isAuthenticated } = useAuth0();

 
  return (
 <>
<div class="max-w-4xl mx-auto my-8 mt-20 ">
  <h1 class="text-4xl font-bold mb-4">{mapeotitulo}</h1>
  <p class="text-gray-700 text-xl mb-8">{mapeo}</p>
  
  <div class="flex items-center mb-8">
    <p class="text-lg font-medium mr-4">Nivel de dificultad:</p>
    <span class="text-green-500">{mapeonivel}</span>
  </div>

  {isAuthenticated && 
    <div class="flex justify-center">
      <Link to="/rutas/deportiva/description/:info_id/reservar" class="py-4 px-8 bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">Reservar</Link>
    </div>
  }
</div>
    
 </>

      
  )
}
