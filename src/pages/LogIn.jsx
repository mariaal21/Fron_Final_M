import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>

      <a href="/register">Registrarse</a>

    <form action="">
    <div>
      <label htmlFor="Username">Username</label>
      <input type="text" id='username' placeholder='Enter Username' />

      <label htmlFor="Password">Password</label>
      <input type="password" id='Password' placeholder='Enter Password' />

      <button type='submit'>
        <span>Login</span>
      </button>
    </div>

    <span>
      ¿Has olvidado tu contraseña? <a href="">Click Here</a>
    </span>
    </form>


    </div>


  )
}
 