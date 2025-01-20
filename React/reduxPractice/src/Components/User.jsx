import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/UserSlice'

const User = () => {

    const dispatch = useDispatch()
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

  return (
    <div>
        <div>
            <input onChange={(e) => {
               setUsername(e.target.value)
            }} type="text" placeholder='Username' />
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" placeholder='Password' />
            <button onClick={() => {
                dispatch(addUser({username, password}))
            }}>Add User</button>
        </div>
    </div>
  )
}

export default User