import React, { useContext } from 'react'
import { userContext } from '../App'

const Cpoint1point1 = () => {

    const userData = useContext(userContext)
    console.log(userData)

  return (
    <div>
        {userData.status}
    </div>
  )
}

export default Cpoint1point1