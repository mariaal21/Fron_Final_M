import React, { useState } from 'react';
import Calendar from 'react-calendar';

export const Reservar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState(new Date());

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFechaChange = (date) => {
    setFecha(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Aquí podrías enviar los datos del formulario al backend para procesarlos
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="fecha">Fecha:</label>
        <Calendar onChange={handleFechaChange} value={fecha} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};



