import React, { useEffect } from 'react'

const MyNumber = () => {
   useEffect(() => {
      console.log("Mynymber comp mounted")
  
      return () => {
        console.log("Mynymber comp unmounted")
      }
  
    }, [])
  return (
    <div>MyNumber</div>
  )
}

export default MyNumber