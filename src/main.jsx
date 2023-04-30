import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import Layout from './compenents/Layout'
import { Rutas } from './pages/Rutas'
import { Clasica } from './compenents/Clasica'
import { Boulder } from './compenents/Boulder'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Deportiva } from './compenents/Deportiva'
import { Favoritos } from './pages/Favoritos'
import { Register } from './pages/Register'
import { Login } from './pages/Login'



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
        path: '/favoritos',
        element: <Favoritos />,
      },
      {
        path: '/login',
        element: <Login />, //aqui deberian ir las rutas al los difernetes log in
      },
      {
        path: '/register',
        element: <Register />, //aqui deberian ir las rutas al los difernetes log in
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)


