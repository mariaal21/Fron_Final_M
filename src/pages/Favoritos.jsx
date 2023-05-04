import favoritosData from "../compenents/FavoritosData"
import { useState } from 'react';
import axios from 'axios';

export const Favoritos = () => {

  const [favoritos, setFavoritos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [url, setUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAgregarFavorito = async () => {
    try {
      const response = await axios.post('/api/favoritos', {
        nombre,
        url,
        descripcion,
      });
      setFavoritos([...favoritos, response.data]);
      setNombre('');
      setUrl('');
      setDescripcion('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Mis favoritos</h1>
      <ul>
        {favoritosData.map((favorito) => (
          <li key={favorito.id}>
            <h2>{favorito.nombre}</h2>
            <p>{favorito.descripcion}</p>
            <a href={favorito.url}>Visitar sitio</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
