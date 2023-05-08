import React from 'react'
import ReactDOM from 'react-dom/client'
import './Main.css'
import Index from './pages/Index'
import Layout from './compenents/Layout'
import { Rutas } from './pages/Rutas'
import { Clasica } from './compenents/Clasica'
import { Boulder } from './compenents/Boulder'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Deportiva } from './compenents/Deportiva'

// import { Login } from './pages/Login'
import { InfoRutas } from './compenents/InfoRutas'
import { InfoRutasBoulder } from './compenents/InfoRutasBoulder'
import { Foro} from './pages/Foro'
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
// import ReactDOM from "react-dom";
import LoginAuth from './pages/LoginAuth'
import { Reservar } from './compenents/Reservar'
import { InfoRutasDeportiva } from './compenents/infoRutasDeportiva'
import { DasboardAdmin } from './pages/DasboardAdmin'
// import { useAuth0 } from "@auth0/auth0-react";
// import { createBrowserHistory } from 'history';
import './index.css';
import { Contacto } from './pages/Contacto'
import App from './App'
import { DashboardDD } from './pages/DashboardDD'


// const { user, isAuthenticated, isLoading } = useAuth0();
// const history = createBrowserHistory();

const router = createBrowserRouter([


  {
    
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: '/rutas',
        element: <Rutas />,
      },
      {
        path: '/rutas/clasica',
        element: <Clasica/>,
      },
      {
        path: '/rutas/deportiva',
        element: <Deportiva />,
      },
      {
        path: '/rutas/boulder',
        element: <Boulder  />,
      },
      {
      
        path: '/foro',
        element: <Foro/>,
      },
      {
        path: '/contacto',
        element: <Contacto />,
      },
      {
        path: '/login',
        element: <LoginAuth />, 
      },
      {
        path:'rutas/clasica/description/:info_id',
        element: <InfoRutas  />
      },
      {
        path:'rutas/boulder/description/:info_id',
        element: <InfoRutasBoulder/>
      },
      {
        path:'rutas/deportiva/description/:info_id',
        element: <InfoRutasDeportiva />
      },
      {
        path:`rutas/clasica/description/:info_id/reservar`,
        element: <Reservar/>
      },
      {
        path:'rutas/deportiva/description/:info_id/reservar',
        element: <Reservar />
      },
      {
        path:'rutas/boulder/description/:info_id/reservar',
        element: <Reservar />
      },
      {
        
        path:'/admin-dashboard',
        element: <DashboardDD />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-sz4yznqwzp78ofwt.us.auth0.com"
    clientId="tnwDmKzUjQF0CY87iMDH3HHaiKCw9O17"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <RouterProvider router={router}/>

    </Auth0Provider>
  </React.StrictMode>,
)