import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../pages/LogOutAuth";
import LoginAuth from "../pages/LoginAuth";
import "../css/menuHamburguesa.css"

import { useState } from 'react';

export const Navbar = () => {

  const { isAuthenticated, user } = useAuth0();
  const isAdmin = user && user.email === "maria@maria.es" && user.sub === "auth0|64526c260af2d0582e5c1126";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>


      <div className={`navbar ${menuOpen ? "show" : ""}`}>
        <div className='raya'></div>

        <div className="hamburger" onClick={toggleMenu}>
  <div className="hamburger-line"></div>
  <div className="hamburger-line"></div>
  <div className="hamburger-line"></div>
</div>

        <Link to="/" className='nav-link' > Inicio </Link>
        {!isAdmin && <Link to="/rutas" className='nav-link'> Rutas </Link>}
        {!isAdmin && <Link to="/foro" className='nav-link'> Foro </Link>}
        {!isAdmin && <Link to="/contacto" className='nav-link'> Contacto </Link>}
        {isAdmin && isAuthenticated && <Link to="/admin-dashboard" className='nav-link'> Admin </Link>}
        <div className={isAuthenticated ? "ml-auto my-auto logout-btn" : "ml-auto my-auto login-btn"}>
          {isAuthenticated ? <LogoutButton /> : <LoginAuth />}
        </div>
        <div className='raya'></div>



      </div>
    </>

  )
}
