import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Reservar } from './Reservar'


import useFetchInfo from '../helpers/useFetchInfo'

export const InfoRutas = () => {

  const [data, setData] = useState([]);

    
const {info_id} = useParams()

console.log(info_id)

// const [info , setInfo]= useState({})

  const navigate = useNavigate()


//   useEffect(()=> {
//     const getInfo = async () => {
//       try {
//         const data = await useFetchInfo(info_id)
//         setInfo(data)
//         console.log(setInfo)
//        }
//       catch {
//         error
//       }
//     }
//     getInfo()
//  }, [info_id] )

const datos = useFetchInfo(info_id, data, setData)

const mapeo = datos.map(dato => dato.descripcion)

const mapeotitulo = datos.map(dato => dato.titulo)

const mapeonivel = datos.map(dato => dato.nivel)


console.log(mapeo + "este es data info rutas")



// const object = Object.values(data)
// console.log(object + "oBAJETO")

// const dataArray = new Array(data)
// console.log(dataArray + "console del array")
 
  return (
 <>

  <h1>{mapeotitulo}</h1>
    <h1>{mapeo}</h1>
    <h1>{mapeonivel}</h1>

    <button  ><Link to="/rutas/clasica/description/:info_id/reservar" className='nada' > Reservar </Link></button>
{/* <Link to="/rutas/clasica/description/:info_id/reservar" className='nada' > Reservar </Link> */}

    
 </>

      
  )
}
