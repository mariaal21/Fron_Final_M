import React from 'react'
import useFetch from '../helpers/useFetch'


const Index = () => {

  const data  = useFetch()

  // if (!data || !data.length) {
  //   return <div>Cargando...</div>;
  // }


  return (
   <>
<div>
  {Array.isArray(data) ? (
    data.map((item) => (
      <div key={item.id}>
        <p>{item.tipo}</p>
      </div>
    ))
  ) : (
    <p>No se encontraron datos.</p>
  )}
</div>

   </>
  )
}

export default Index