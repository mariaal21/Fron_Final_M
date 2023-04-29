import { useNavigate, Form, useActionData, redirect, Link } from 'react-router-dom'
import { Clasica } from '../compenents/Clasica'
import { Deportiva } from '../compenents/Deportiva'
import { Boulder } from '../compenents/Boulder'

export const Rutas = () => {

    const navigate = useNavigate()

  return (
    <div>
        <Link to="/rutas/clasica">
            <Clasica/>
        </Link>
        <Link  to="/rutas/deportiva">
            <Deportiva/>
        </Link> 
        <Link to="/rutas/boulder">
            <Boulder/>
        </Link>
        
    </div>
  )
}
