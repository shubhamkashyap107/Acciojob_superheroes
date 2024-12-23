import React, { useEffect } from 'react'

const About = () => {

    useEffect(() => {
      console.log("About ka use effect chala")
    }, [])

  return (
    <div>About</div>
  )
}

export default About