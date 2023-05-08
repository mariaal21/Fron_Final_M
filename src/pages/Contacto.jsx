
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import imagenPuno from '../assets/img/imagenPuno.jpeg'
import montañauser from '../assets/img/montañauser.jpg'
import fotoSaul from '../assets/img/fotoSaul.jpeg'

export const Contacto = () => {



  return (
    <>
 <div className="flex items-center justify-between w-full mr-80 mt-20">
  <div className="flex items-center ml-20 bg-gray-100 rounded-lg shadow-lg p-10 hover:transform hover:scale-105 transition-all duration-300 mr-20">
    <img src={imagenPuno} alt="" className="w-40 h-40 mr-10" />
    <div>
      <h2 className="text-lg font-medium text-3xl">Alvaro Berlanga</h2>
      <p className="text-sm text-gray-500 mt-5 text-2.5xl ">Es uno de nuestros organizadores y guias principales, lleva escalando desde que era muy pequeño y le encanta poder compartir y hacer el deporte que mas le gusta con nuevas personas. Tiene claro que quiere ganarse la vida hacinendo una de las cosas que mas le gusta hacer, subir montañas escalar paredes e intentar conseguir la gente cumpla sus sueños al igual que el. </p>
    </div>
  </div>
</div> 

<div className="flex items-center justify-between w-full mr-80 mt-20">
  <div className="flex items-center bg-gray-100 rounded-lg shadow-lg p-10 hover:transform hover:scale-105 transition-all duration-300 ml-20 mr-20">
    <div>
      <h2 className="text-lg font-medium text-3xl text-right">Saul Almazan</h2>
      <p className="text-sm text-gray-500 mt-5 text-2.5xl text-right">Es uno de nuestros organizadores y guias principales, lleva escalando desde que era muy pequeño y le encanta poder compartir y hacer el deporte que mas le gusta con nuevas personas. Tiene claro que quiere ganarse la vida hacinendo una de las cosas que mas le gusta hacer, subir montañas escalar paredes e intentar conseguir la gente cumpla sus sueños al igual que el.</p>
    </div>
    <img src={fotoSaul} alt="" className="w-40 h-40 ml-10" />
  </div>
</div> 

<FloatingWhatsApp phoneNumber="629616044"
   userName="Informacion"
   message="¡Hola Alvaro, estoy interesado en tus servicios de guía turístico! ¿Podrías darme más información?"
   accountName='Alvaro'
    avatar= {montañauser}
   chatMessage='Cualquier cosa no dudes en preguntarme'
   className='' 
   chatboxHeight={500}/>


    </>
  )
}
