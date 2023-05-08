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
       
        <div class="w-full mr-10 mt-40 max-w-full max-w-1200px overflow-x-scroll">
  <h1>Reservas Rutas</h1>
  <table class="table w-full">
    <thead>
      <tr>
        <th class="px-4 py-2 text-left border">Nombre</th>
        <th class="px-4 py-2 text-left border">Ruta</th>
        <th class="px-4 py-2 text-left border">Personas</th>
        <th class="px-4 py-2 text-left border">Fecha</th>
        <th class="px-4 py-2 text-right border"></th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td class="px-4 py-2 text-left border">{item.nombre}</td>
          <td class="px-4 py-2 text-left border">{item.ruta}</td>
          <td class="px-4 py-2 text-left border">{item.personas}</td>
          <td class="px-4 py-2 text-left border">{moment(item.fecha).format('YYYY-MM-DD HH:mm')}</td>
          <td class="px-4 py-2 text-right border">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(item.id)}>Eliminar</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




        </>

    );
};
