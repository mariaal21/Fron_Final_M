import { useState , useEffect} from "react";
import useFetchForo from "../hooks/useFechForo";
import { useAuth0 } from "@auth0/auth0-react";

const ForoComments = () => {

  const { user,roles, isAuthenticated, isLoading } = useAuth0();
    const [comentarios, setComentarios] = useState({data: []});
  
  useEffect(() => {
    fetch('http://localhost:4500/api/foro')
      .then(response => response.json())
      .then(data => setComentarios(data))
      .catch(error => console.log(error));
  }, [comentarios]);

  comentarios.data.sort((a, b) => b.commentid - a.commentid);// mostrar el último comentario

  return (
<>
<div className="bg-white p-6 rounded-lg shadow-md mt-20">
  <h2 className="text-2xl font-bold mb-4 ml-20">Comentarios</h2>
  <hr className="my-4" />
  {comentarios.ok && comentarios.data.length > 0 ? (
    comentarios.data.map((coment) => (
      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4" key={coment.commentid}>
        <h3 className="font-bold text-lg mb-2">{coment.comentario}</h3>
        <p className="text-gray-600">{coment.fecha}</p>
        <p className="text-gray-800 mt-2">{coment.name}</p>
      </div>
    ))
  ) : (
    <p className="text-gray-600">Cargando comentarios...</p>
  )}
</div>

    </>
  );
};

export default ForoComments;