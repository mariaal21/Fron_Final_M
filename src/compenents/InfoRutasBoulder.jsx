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

<div className='ruta-description '>
    <h1 className='titulo'>{mapeotitulo}</h1>
    <p className='descripcion'>{mapeo}</p>
    <div className='dificultad'> 
    <p>Nivel de dificultad : <span>{mapeonivel}</span></p>
    </div>

    <div >
       
        {isAuthenticated  &&  <Link  to="/rutas/boulder/description/:info_id/reservar" className='boton' > Reservar </Link> }
        </div>
    </div>

 </>

      
  )
}
