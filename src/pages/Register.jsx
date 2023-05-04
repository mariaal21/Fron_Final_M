import React, { useState } from 'react'
import '../Main.css'



export const Register = () => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        Axios.post('`http://localhost:4500/api/users', {

            Emial:email,
            UserName:userName,
            password:password
        }).then (()=> {
            console.log("Usuario creado")
        })
    }

    return (
        <>
            <a href="/login">Registrarse</a>

            <div>
                {/* 
                <Link to={'./login'}>
                    <button>Sign in</button>
                </Link> */}
<form action="" className="form-container">
    <div>
    <a href="/register" class="form-heading">Registrarse</a>
      
        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            id="email" 
            placeholder="Enter email" 
            onChange={(event) => {
                setEmail(event.target.value)
            }} 
        />

        <label htmlFor="username">Username</label>
        <input 
            type="text" 
            id="username" 
            placeholder="Enter username" 
            onChange={(event) => {
                setUserName(event.target.value)
            }} 
        />

        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            id="password" 
            placeholder="Enter password" 
            onChange={(event) => {
                setPassword(event.target.value)
            }} 
        />

        <button type="submit" onClick={createUser}>
            <span>Register</span>
        </button>
    </div>
</form>




            </div>
        </>
    )
}
