import React, { useState } from 'react'

const Login = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")


  return (
    <div>

        <input type="text" onChange={(e) => {
            setUsername(e.target.value)
        }} />

        <input type="password" onChange={(e) => {
            setPassword(e.target.value)
        }}/>
        <input type="text" onChange={(e) => {
            setEmail(e.target.value)
        }} />

        <p>{username}</p>
        <p>{password}</p>
        <p>{email}</p>

    </div>
  )
}

export default Login