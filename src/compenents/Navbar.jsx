import { Link } from 'react-router-dom'

export const Navbar = () => {


  return (
    <>
      <div className='nav'>
        <Link to="/" className='navbar' > Inicio </Link>
        <Link to="/rutas" className='navbar'> Rutas </Link>
        <Link to="/foro"  className='navbar'> Foro </Link>
        <Link to="/favoritos"  className='navbar'> Favoritos </Link>
        <Link to="/login" className='navbar'> Login </Link>
        <Link to="/register" className='navbar'> Register </Link>
      </div>
    </>
    
  )
}
