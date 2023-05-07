import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useCalendarFetchGet } from '../hook/useCalendarGet';
import { ForoAdmin } from '../compenents/ForoAdmin';

export const DasboardAdmin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useCalendarFetchGet("http://localhost:4500/api/calendar");
                const jsonData = response.data;
                setData(jsonData);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [data]);

    const handleDelete = async (eventId) => {
        try {
            const response = await fetch(`http://localhost:4500/api/calendar/${eventId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                setData(data.filter((item) => item.id !== eventId));
            } else {
                console.error(`Error al eliminar evento con id ${eventId}`);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (

        <>

        <div>
            <ForoAdmin/>
        </div>

       
        <div className="table w-full ml-10 mr-10 mt-40">
        <h1>Reservas Rutas</h1>
  <div className="table-auto">
    <div className="flex">
      <div className="w-1/5 px-4 py-2 text-left border">Nombre</div>
      <div className="w-1/5 px-4 py-2 text-left border">Ruta</div>
      <div className="w-1/5 px-4 py-2 text-left border">Personas</div>
      <div className="w-1/5 px-4 py-2 text-left border">Fecha</div>
      <div className="w-1/5 px-4 py-2 text-right border"></div>
    </div>
    {data.map((item) => (
      <div key={item.id} className="flex">
        <div className="w-1/5 px-4 py-2 text-left border">{item.nombre}</div>
        <div className="w-1/5 px-4 py-2 text-left border">{item.ruta}</div>
        <div className="w-1/5 px-4 py-2 text-left border">{item.personas}</div>
        <div className="w-1/5 px-4 py-2 text-left border">{moment(item.fecha).format('YYYY-MM-DD HH:mm')}</div>
        <div className="w-1/5 px-4 py-2 text-right border">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(item.id)}>Eliminar</button>
        </div>
      </div>
    ))}
  </div>
</div>


{/* 
        <div>
            <ForoAdmin/>
        </div> */}
        </>

    );
};
