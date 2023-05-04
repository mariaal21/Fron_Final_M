import React, { useState, useEffect } from "react";
import {  FetchClasica } from "../utils/api";

const useFetchInfo = (info_id, data, setData) => {


//   const [data, setData] = useState([]);

  useEffect(() => {
    const Fetchid = async () => {
      const {ok, data} = await FetchClasica(`http://localhost:4500/api/routes/clasica/${info_id}`);
        console.log(data, 'USEFETCHINFO')
    //   console.log(`http://localhost:4500/api/routes/clasica/${info_id}` + "Prueba dorian")
      
    //   const jsonData = await response.json()

    //   setData(jsonData);
    //   console.log(jsonData + "Jsondataaaaa")
    setData(data)
    };
    Fetchid();
  }, [info_id]);



  return data;
  

  
};

export default useFetchInfo;
