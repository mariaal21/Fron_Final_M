import React from 'react'
import useFetch from '../hooks/useFetch'

import { Carrousel } from '../compenents/Carrousel'
import { Cards } from '../compenents/Cards'
import { useAuth0 } from '@auth0/auth0-react'
import ForoComments from '../compenents/ForoComments'


const Index = () => {


  const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  

    console.log(user, isAuthenticated, isLoading + "ESte es el profile" )



  return (

   
    <>
      <Carrousel/>
      <Cards />
      
     <ForoComments /> 
      
    </>
  )
}

export default Index