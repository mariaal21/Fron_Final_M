import React from 'react'
import useFetch from '../helpers/useFetch'
import { Login } from './Login'
import { Carrousel } from '../compenents/Carrousel'
import { Cards } from '../compenents/Cards'



const Index = () => {

  //const data = useFetch()
  // if (!data || !data.length) {
  //   return <div>Cargando...</div>;
  // }


  return (

   
    <>
      <Carrousel/>
      <Cards/>
      
      
    </>
  )
}
/*
<Login/>


      <div>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item.id}>
              <p>{item.tipo}</p>
            </div>
            
          ))
        ) : (
          <p>No se encontraron datos.</p>
          
        ) }
        
      </div>
*/
export default Index