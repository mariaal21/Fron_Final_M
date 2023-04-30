import React, { useState, useEffect } from "react";
import {  FetchClasica, FetchDeportiva } from "../utils/api";

const useFetchDeportiva = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchLocalizacion = async () => {
      const response = await FetchDeportiva('http://localhost:4500/api/routes/deportiva');
      console.log(response)
      const jsonData = response.data
      setData(jsonData);
      console.log(jsonData)
    };
    FetchLocalizacion();
  }, []);



  return data;
  

  
};

export default useFetchDeportiva;
