
import {  Outlet, Link, useLocation} from 'react-router-dom' 
import '../Main.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'


const Layout = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>


        <Navbar />
    
            <Outlet />
        
    </div>
  )
}

export default Layout