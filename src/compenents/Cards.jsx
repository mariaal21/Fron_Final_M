import { useNavigate } from 'react-router-dom'
import '../Main.css'
import deportiva from '../assets/img/deportiva.jpg'
import clasica from '../assets/img/clasica.jpg'
import boulder from '../assets/img/boulder.jpg'



export const Cards = () => {
    const navigate = useNavigate()
    
    const info = [
        {   
            id: 1,
            img: clasica,
            title: "Clásica",
            to: "rutas/clasica"
        },
        {   
            id: 2,
            img: deportiva,
            title: "Deportiva",
            to: "rutas/deportiva"
        },
        {   
            id: 3,
            img:boulder,
            title: "Boulder",
            to: "rutas/boulder"
        },
    ]
  return (

   <>
    <h1 className='mt'>Diferentes tipos de rutas</h1>
<div className="container mx-auto">
  <div className="flex flex-wrap justify-center -mx-4">
    {info.map((value, index) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4" key={value.id}>
        <div className="rounded-lg shadow-md bg-white">
          <img className="w-full h-64 object-cover rounded-t-lg" src={value.img} alt={value.title} />
          <div className="px-4 py-2 flex flex-col justify-center h-full">
            <p className="text-gray-800 text-lg font-bold mt-4">{value.title}</p>
            <div className="mt-auto flex justify-center">
              <button onClick={() => navigate(`${value.to}`)} className="bg-amber-400 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300  mt-10 mb-8">
                Ver ruta
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</>


  )
}
