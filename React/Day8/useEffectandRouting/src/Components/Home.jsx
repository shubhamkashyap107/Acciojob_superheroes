import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    // console.log("Home ka use effect chala")

    const ID = setInterval(() => {
      console.log("OKAY")
    }, 2000)



    return () => {
      clearInterval(ID)
    }
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home