import { useState } from "react";
import useFetchForo from "../hooks/useFechForo";
import { useAuth0 } from "@auth0/auth0-react";

const FormComments = () => {
  const { user,roles, isAuthenticated, isLoading } = useAuth0();


  const [name, setName] = useState(user?.name || "");
  const [comentario, setComentario] = useState("");
  const [comentarios, postComentario] = useFetchForo();



  const handleSubmit = (e) => {
    e.preventDefault();
    const fecha = new Date().toLocaleDateString();
    console.log(`Fecha ${fecha}`)
    const comentarioNuevo = {
      name: name || user?.name, 
      comentario,
      fecha,
    };
    postComentario(comentarioNuevo);
    setName("");
    setComentario("");
    console.log(comentarioNuevo)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-40 w-full">
    <div className="mb-4">
      <label htmlFor="name" className="block font-medium mb-1">Nombre:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value || user?.name)}
        className="w-full p-2 border border-gray-400 rounded"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="comentario" className="block font-medium mb-1">Comentario:</label>
      <textarea
        id="comentario"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        className="w-full p-2 border border-gray-400 rounded"
      ></textarea>
    </div>
    <div className="flex justify-end">
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Enviar</button>
    </div>
  </form>
  
  );
};

export default FormComments;