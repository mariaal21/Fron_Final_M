import { useState, useEffect } from "react";
/**
 * Hook personalizado que gestiona la obtención y el envío de comentarios del foro al servidor.
 * @function useFetchForo
 * @returns {Array} - Un array que contiene los comentarios obtenidos del servidor, una función para enviar un nuevo comentario al servidor, un estado de carga y un mensaje de error.
 */

const useFetchForo = () => {
    const [comentarios, setComentarios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);



    /**
   * Realiza una petición GET al servidor para obtener los comentarios del foro.
   * @async
   * @function getComentarios
   * @throws {Error} - Lanza un error si la respuesta del servidor no es válida o si hay un error al cargar los datos.
   */
  
    const getComentarios = async () => {
      try {
        const response = await fetch('http://localhost:4500/api/foro');
        if (!response.ok) {
          throw new Error('Ha ocurrido un error al obtener los comentarios');
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Los datos obtenidos no son un array');
        }
        setComentarios(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
/**
   * Realiza una petición POST al servidor para enviar un nuevo comentario al foro.
   * @async
   * @function postComentario
   * @param {object} comentario - Los datos del comentario que se enviarán al servidor.
   * @throws {Error} - Lanza un error si la respuesta del servidor no es válida o si hay un error al enviar los datos.
   */

    const postComentario = async (comentario) => {
      try {
        const response = await fetch("http://localhost:4500/api/foro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comentario),
        });
        if (!response.ok) {
          throw new Error('Ha ocurrido un error al publicar el comentario');
        }
        const data = await response.json();
        setComentarios((comentarios) => [...comentarios, data]);
      } catch (error) {
        setError(error.message);
      }
    };
  
    useEffect(() => {
      getComentarios();
    }, []);
  
    return [comentarios, postComentario, isLoading, error];
};

export default useFetchForo;
