import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCalendarFetch } from '../hook/useCalendar';
import '../Main.css';

const options = [
  { label: 'La cabrera', value: 'ruta1' },
  { label: 'La pedriza', value: 'ruta2' },
  { label: 'Guadarrama', value: 'ruta3' },
  { label: 'Peñalara', value: 'ruta4' },
  { label: 'Torrelodones', value: 'ruta5' },
  { label: 'Zarzalejo', value: 'ruta6' },
  { label: 'La pedriza', value: 'ruta7' },
  { label: 'El escorial', value: 'ruta8' },
  { label: 'Patones', value: 'ruta9' },
];

export const Reservar = (info_id) => {
  const [nombre, setNombre] = useState('');
  const [ruta, setRuta] = useState('');
  const [personas, setPersonas] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [rutas, setRutas] = useState({data: []});
  const [error, setError] = useState('');

  useEffect(()=> {
    useCalendarFetch('http://localhost:4500/api/calendar')
    .then((response)=>response.json())
    .then((data)=> setRutas(data))
  }, [rutas])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !ruta || !personas || !fecha) {
      setError('Por favor llene todos los campos obligatorios');
      return;
    } else {
      setError('');
    }
    
    // Aquí puedes enviar los datos del formulario al servidor
    console.log({ nombre, ruta, personas, fecha });

    try {
      await useCalendarFetch(`http://localhost:4500/api/calendar`, {
        nombre, 
        ruta, 
        personas,
        fecha
      })
      alert('Ha reservado una ruta correctamente')
    }catch (error) {
      alert('error al hacer la reserva')
      console.log(error)
    }
  };

  return (
    <div class="p-10 bg-white rounded-lg shadow-lg">
  <h1 class="text-3xl font-bold mb-4">Reserva de ruta</h1>
  
  <form class="flex flex-col" onSubmit={handleSubmit}>
    <div class="mb-4">
      <label class="font-bold text-gray-700" for="nombre">Nombre:</label>
      <input class="border border-gray-400 p-2 w-full rounded-lg" type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </div>

    <div class="mb-4">
      <label class="font-bold text-gray-700" for="ruta">Ruta:</label>
      <select class="border border-gray-400 p-2 w-full rounded-lg" id="ruta" value={ruta} onChange={(e) => setRuta(e.target.value)}>
        <option value="">--Seleccione una ruta--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>

    <div class="mb-4">
      <label class="font-bold text-gray-700" for="personas">Número de personas:</label>
      <input class="border border-gray-400 p-2 w-full rounded-lg" type="number" id="personas" value={personas} onChange={(e) => setPersonas(e.target.value)} />
    </div>

    <div class="mb-4">
      <label class="font-bold text-gray-700" for="fecha">Fecha:</label>
      <DatePicker
        class="border border-gray-400 p-2 w-full rounded-lg"
        selected={fecha}
        onChange={(date) => setFecha(date)}
        minDate={new Date()}
        showTimeSelect
        timeIntervals={45}
        timeCaption="Hora"
        dateFormat="dd/MM/yyyy HH:mm"
        timeFormat="HH:mm"
      />
    </div>
      
    {error && <div class="text-red-500 mb-4">{error}</div>}
      
    <button class="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg mt-4 mx-auto" type="submit">Reservar</button>
  </form>
</div>

  );
};
