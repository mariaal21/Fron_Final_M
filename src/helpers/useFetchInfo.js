import React, { useState, useEffect } from "react";
import {  FetchClasica } from "../utils/api";

const useFetchInfo = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchLocalizacionInfo = async (info_id) => {
      const response = await FetchClasica(`http://localhost:4500/api/routes/clasica/${info_id}`);
      console.log(response)
      const jsonData = response.data
      setData(jsonData);
      console.log(jsonData)
    };
    FetchLocalizacionInfo();
  }, []);



  return data;
  

  
};

export default useFetchInfo;
