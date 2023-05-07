import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCalendarFetch } from '../hook/useCalendar';
import '../Main.css'

const options = [
  { label: 'Ruta 1', value: 'ruta1' },
  { label: 'Ruta 2', value: 'ruta2' },
  { label: 'Ruta 3', value: 'ruta3' },
  { label: 'Ruta 4', value: 'ruta4' },
];

export const Reservar = (info_id) => {
  const [nombre, setNombre] = useState('');
  const [ruta, setRuta] = useState('');
  const [personas, setPersonas] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [rutas, setRutas] = useState('');

  useEffect(()=> {
    useCalendarFetch('http://localhost:4500/api/calendar')
    .then((response)=>response.json())
    .then((data)=> setRutas(data))
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }catch {
      alert('error al hacer la reserva')
      console.log(error)
    }

  };

  

  return (
    <form className='formReservar' onSubmit={handleSubmit}>
      <label className='label'>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />

      <label className='rutas'>
        Ruta:
        <select className='select' value={ruta} onChange={(e) => setRuta(e.target.value)}>
          <option value="">--Seleccione una ruta--</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label className='label'>
        Número de personas:
        <input type="number" value={personas} onChange={(e) => setPersonas(e.target.value)} />
      </label>
      <br />

      <label className='label'>
        Fecha:
        <DatePicker
          selected={fecha}
          onChange={(date) => setFecha(date)}
          minDate={new Date()}
          showTimeSelect
          timeIntervals={45}
          timeCaption="Hora"
          dateFormat="dd/MM/yyyy HH:mm"
          timeFormat="HH:mm"
        />
        {/* <DatePicker selected={fecha} onChange={(date) => setFecha(date)} /> */}
      </label>
      <br />

      <button className='Finish' type="submit">Reservar</button>
    </form>
  );
};

// export default Reservar;
