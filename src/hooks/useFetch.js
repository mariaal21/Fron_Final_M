import React, { useState, useEffect } from "react";
import { Fetch } from "../utils/api";


/**
 * Hook personalizado para hacer peticiones GET a una API y obtener los datos.
 * @returns {Array} Los datos obtenidos de la API.
 */


const useFetch = () => {
/**
     * Función asincrónica para obtener los datos de la API y actualizar el estado del hook.
     */

  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchTipo = async () => {
      const response = await Fetch('http://localhost:4500/api/routes');
      console.log(response)
      const jsonData = response.data
      setData(jsonData);
      console.log(jsonData)
    };
    FetchTipo();
  }, []);



  return data;
  

  
};

export default useFetch;
