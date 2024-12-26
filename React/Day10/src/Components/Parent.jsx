import React, { useEffect, useState } from 'react'
import Middle from './Middle'

const Parent = React.memo(() => {
    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("Parent la use effect fired")
    })
  
    return (
      <div>
            
          <h3>{count}</h3>
          <button onClick={() => {
              setCount(count + 1)
          }}>Increment Parent</button>


          <Middle />
      </div>
    )
})

export default Parent