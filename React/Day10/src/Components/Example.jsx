import React, { useEffect, useState } from 'react'

const Example = () => {

    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("Use effect of example component fired")


        // return () => {
        //     console.log("Example comp unmounted")
        // }
    }, [count])

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
    </div>
  )
}

export default Example