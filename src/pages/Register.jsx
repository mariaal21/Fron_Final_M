import React, { useState } from 'react'



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
            <a href="/login">Login</a>

            <div>
                {/* 
                <Link to={'./login'}>
                    <button>Sign in</button>
                </Link> */}

                <form action="">
                    <div>
                        <label htmlFor="emial">email</label>
                        <input type="text" id='emial' placeholder='Enter emial'
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }} />

                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' placeholder='Enter username'
                            onChange={(event) => {
                                setUserName(event.target.value)
                            }} />

                        <label htmlFor="Password">Password</label>
                        <input type="password" id='Password' placeholder='Enter Password'
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }} />

                        <button type='submit' onClick={createUser}>
                            <span>Register</span>
                        </button>
                    </div>

                    {/* <span>
                        ¿Has olvidado tu contraseña? <a href="">Click Here</a>
                    </span> */}
                </form>


            </div>
        </>
    )
}
