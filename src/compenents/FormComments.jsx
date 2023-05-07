import { useState } from "react";
import useFetchForo from "../hooks/useFechForo";
import { useAuth0 } from "@auth0/auth0-react";

const FormComments = () => {
  const { user,roles, isAuthenticated, isLoading } = useAuth0();


  const [name, setName] = useState(user?.name || "");
  const [comentario, setComentario] = useState("");
  const [comentarios, postComentario] = useFetchForo();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const fecha = new Date().toLocaleDateString();

    // Validar campos del formulario
    const errors = {};
    if (!name) {
      errors.name = "Debe ingresar un nombre";
    }
    if (!comentario) {
      errors.comentario = "Debe ingresar un comentario";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const comentarioNuevo = {
      name: name || user?.name, 
      comentario,
      fecha,
    };
    postComentario(comentarioNuevo);
    setName("");
    setComentario("");
    setErrors({});
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
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="comentario" className="block font-medium mb-1">Comentario:</label>
        <textarea
          id="comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded"
        ></textarea>
        {errors.comentario && <p className="text-red-500">{errors.comentario}</p>}
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Enviar</button>
      </div>
    </form>
  );
};

export default FormComments;
