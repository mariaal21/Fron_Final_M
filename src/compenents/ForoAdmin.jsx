import { useEffect, useState } from "react";
import { useForoGet } from "../hook/useForoGet";
import moment from 'moment';


export const ForoAdmin = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useForoGet("http://localhost:4500/api/foro");
                const jsonData = response.data;
                setData(jsonData);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);


    const handleDelete = async (commentid) => {
        try {
            const response = await fetch(`http://localhost:4500/api/foro/${commentid}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(commentid)

            if (response.ok) {
                setData(data.filter((m) => m.commentid !== commentid));
                console.log(commentid)
            } else {
                console.error(`Error al eliminar evento con id ${commentid}`);
                console.log(id)
            }
        } catch (error) {
            console.error("Error:", error);
            console.log(commentid)
        }
    };

    return (


        <>


      
<div className="table w-full mr-10 mt-40 ">
<h1>Comentarios del foro</h1>
  <div className="table-auto">
    <div className="flex">
      <div className="w-1/4 px-4 py-2 text-left border">Nombre</div>
      <div className="w-1/4 px-4 py-2 text-left border">Comentario</div>
      <div className="w-1/4 px-4 py-2 text-left border">fecha</div>
      <div className="w-1/4 px-4 py-2 text-right border"></div>
    </div>
    {data.map((m) => (
      <div key={m.commentid} className="flex">
        <div className="w-1/4 px-4 py-2 text-left border">{m.name}</div>
        <div className="w-1/4 px-4 py-2 text-left border">{m.comentario}</div>
        <div className="w-1/4 px-4 py-2 text-left border">{moment(m.fecha).format('YYYY-MM-DD HH:mm')}</div>
        <div className="w-1/4 px-4 py-2 text-right border">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(m.commentid)}>Eliminar</button>
        </div>
      </div>
    ))}
  </div>
</div>

        </>
    )
}
