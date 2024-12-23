import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
      console.log("Contact ka use effect chala")
    }, [])

  return (
    <div>Contact</div>
  )
}

export default Contact