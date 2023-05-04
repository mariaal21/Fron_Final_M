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
import { Favoritos } from './pages/Favoritos'
import { Register } from './pages/Register'
// import { Login } from './pages/Login'
import { InfoRutas } from './compenents/InfoRutas'
import { Foro} from './pages/Foro'
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
// import ReactDOM from "react-dom";
import LoginAuth from './pages/LoginAuth'
import { Reservar } from './compenents/Reservar'
// import { useAuth0 } from "@auth0/auth0-react";



// const { user, isAuthenticated, isLoading } = useAuth0();


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/rutas',
        element: <Rutas
                />,
      },
      {
        path: '/rutas/clasica',
        element: <Clasica />,
      },
      {
        path: '/rutas/deportiva',
        element: <Deportiva />,
      },
      {
        path: '/rutas/boulder',
        element: <Boulder />,
      },
      {
        path: '/foro',
        element: <Foro />,
      },
      {
        path: '/favoritos',
        element: <Favoritos />,
      },
      {
        path: '/login',
        element: <LoginAuth />, //aqui deberian ir las rutas al los difernetes log in
      },
      {
        path: '/register',
        element: <Register />, //aqui deberian ir las rutas al los difernetes log in
      },
      {
        path:'rutas/clasica/description/:info_id',
        element: <InfoRutas />
      },
      {
        path:'rutas/clasica/description/:info_id/reservar',
        element: <Reservar />
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

    <RouterProvider router={router}/>,

    </Auth0Provider>
  </React.StrictMode>,
)