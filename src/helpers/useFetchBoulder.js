import React, { useState, useEffect } from "react";
import { FetchBoulder } from "../utils/api";

const useFetchBoulder = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchLocalizacion = async () => {
      const response = await FetchBoulder('http://localhost:4500/api/routes/boulder');
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
