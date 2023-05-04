import React, { useState, useEffect } from "react";
import {  FetchClasica } from "../utils/api";

const useFetchClasica = (info_id) => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchLocalizacion = async () => {
      const response = await FetchClasica(`http://localhost:4500/api/routes/clasica`);
      console.log(response)
      const jsonData = response.data
      setData(jsonData);
      console.log(jsonData)
    
    };
    FetchLocalizacion();
  }, []);



  return data;
  

  
};

export default useFetchClasica;
