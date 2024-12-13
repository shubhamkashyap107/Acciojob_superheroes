import React from 'react'
import InputBar from './InputBar'
import Button from './Button'


const Login = () => {
  return (
    <div className='w-25 border mx-auto p-4 rounded-2' style={{marginTop : "200px"}}>
        <InputBar placeholder="Username" type="text" />
        <InputBar placeholder="Password" type="password" />
        <Button text="Login" />
    </div>
  )
}

export default Login