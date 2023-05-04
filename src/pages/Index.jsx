import React from 'react'
import useFetch from '../helpers/useFetch'
import { Login } from './Login'
import { Carrousel } from '../compenents/Carrousel'
import { Cards } from '../compenents/Cards'
import { CarsData } from '../compenents/CardsData'
import { useAuth0 } from '@auth0/auth0-react'


const Index = () => {


  const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  

    console.log(user, isAuthenticated, isLoading + "ESte es el profile" )

  //const data = useFetch()
  // if (!data || !data.length) {
  //   return <div>Cargando...</div>;
  // }


  return (

   
    <>
      <Carrousel/>
      <Cards
      CarsData={CarsData}/>
      
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