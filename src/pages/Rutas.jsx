import { useNavigate, Form, useActionData, redirect, Link } from 'react-router-dom'
import { Clasica } from '../compenents/Clasica'
import { Deportiva } from '../compenents/Deportiva'
import { Boulder } from '../compenents/Boulder'
import { Cards } from '../compenents/Cards'


export const Rutas = () => {
    
    /*const navigate = useNavigate()*/
  return (
    <div>
        <Link to="/rutas/clasica">
            <p>clasica</p>
        </Link>
        <Link  to="/rutas/deportiva">
        <p>Deportiva</p>
        </Link> 
        <Link to="/rutas/boulder">       
        <p>Boulder</p>
        </Link>

    </div>
  )
}
