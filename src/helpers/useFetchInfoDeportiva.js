import React, { useState, useEffect } from "react";
import { FetchTodas } from "../utils/api";



/**
 * Hook personalizado que permite hacer una petición a una API para obtener información sobre una ruta
 * 
 * @param {string} info_id - El id de la ruta de la que se desea obtener la información
 * @param {Array} data - La información de la ruta obtenida de la API
 * @param {Function} setData - Función para actualizar la información de la ruta obtenida de la API
 * 
 * @returns {Array} - La información de la ruta obtenida de la API
 */


const useFetchInfoDeportiva = (info_id, data, setData) => {


//   const [data, setData] = useState([]);

  useEffect(() => {
    const Fetchid = async () => {
      const {ok, data} = await FetchTodas(`http://localhost:4500/api/routes/deportiva/${info_id}`);
        console.log(data, 'USEFETCHINFO')
   
    setData(data)
    };
    Fetchid();
  }, [info_id]);



  return data;
  

  
};
export default  useFetchInfoDeportiva;


