import React from 'react'
import { Link } from 'react-router-dom'
import '../Main.css'

export const Login = () => {


  
  return (
    <div class="form-container">
  <a href="/register" class="form-heading">Login</a>

  <form action="" class="form">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter Username" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter Password" />
    </div>

    <button type="submit" class="form-btn">Login</button>
  </form>


  <span class="forgot-password">
    ¿Has olvidado tu contraseña? <a href="">Click Here</a>
  </span>
</div>



  )
}
 