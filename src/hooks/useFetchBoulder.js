import React, { useState, useEffect } from "react";
import {FetchTodas } from "../utils/api";

/**

Hook que maneja el fetch de información de rutas de Boulder.
@param {string} info_id - El id de la ruta.
@returns {array} - Un array con la información de las rutas de Boulder.
*/

const useFetchBoulder = (info_id) => {
/**

El estado que almacena la información de las rutas de Boulder.
@type {array}
*/

  const [data, setData] = useState([]);

  /**

Hook useEffect para hacer la llamada al API.
*/
  useEffect(() => {
    const FetchLocalizacion = async () => {
      const response = await FetchTodas('http://localhost:4500/api/routes/boulder');
      console.log(response)
      const jsonData = response.data
      setData(jsonData);
      console.log(jsonData)
    };
    FetchLocalizacion();
  }, []);



  return data;
  

  
};

export default useFetchBoulder;
