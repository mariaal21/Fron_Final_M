import { Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <Link to="/rutas" > Rutas </Link>
      <Link to="/foro" > Foro </Link>
      <Link to="/favoritos" > Favoritos </Link>
      <Link to="/login" > Login </Link>
      <Link to="/register" > Register </Link>
      <main >
            <Outlet />
        </main>
    </div>
  )
}

export default Layout