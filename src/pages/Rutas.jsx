import { Link, Outlet } from 'react-router-dom'
import { Cards } from '../compenents/Cards'
import '../Main.css'
import deportiva from '../assets/img/deportiva.jpg'
import clasica from '../assets/img/clasica.jpg'
import boulder from '../assets/img/boulder.jpg'
import '../index.css';
import'../Main.css'


export const Rutas = () => {
    
    /*const navigate = useNavigate()*/
  return (
<div className="container mx-auto mt-40">
  <div className='Margin-top'>
    <div className="flex flex-wrap -mx-4 mb-4">
      <div className="w-full md:w-1/3 p-4">
        <div className="rounded-lg shadow-md bg-white text-center">
          <img className="w-full h-64 object-cover rounded-t-lg mx-auto" src={clasica} alt="Clásica" style={{objectFit: 'cover', objectPosition: 'center'}} />
          <div className="px-4 py-2">
            <h2 className="text-gray-800 text-lg font-bold">Clásica</h2>
            <Link to="/rutas/clasica" className="text-indigo-500 font-semibold hover:text-indigo-600">
              Ver ruta
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="rounded-lg shadow-md bg-white text-center">
          <img className="w-full h-64 object-cover rounded-t-lg mx-auto" src={deportiva} alt="Deportiva" style={{objectFit: 'cover', objectPosition: 'center'}} />
          <div className="px-4 py-2">
            <h2 className="text-gray-800 text-lg font-bold">Deportiva</h2>
            <Link to="/rutas/deportiva" className="text-indigo-500 font-semibold hover:text-indigo-600">
              Ver ruta
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="rounded-lg shadow-md bg-white text-center">
          <img className="w-full h-64 object-cover rounded-t-lg mx-auto" src={boulder} alt="Boulder" style={{objectFit: 'cover', objectPosition: 'center'}} />
          <div className="px-4 py-2">
            <h2 className="text-gray-800 text-lg font-bold">Boulder</h2>
            <Link to="/rutas/boulder" className="text-indigo-500 font-semibold hover:text-indigo-600">
              Ver ruta
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  
  )
}