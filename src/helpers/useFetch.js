import React, { useState, useEffect } from "react";
import { Fetch } from "../utils/api";

const useFetch = () => {


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
