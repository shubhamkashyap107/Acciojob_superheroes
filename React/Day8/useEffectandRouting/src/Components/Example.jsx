import React, { useEffect } from 'react'

const Example = () => {


    useEffect(() => {
        

        async function getData()
        {
            let res = await fetch("https://jsonplaceholder.typicode.com/todos/")
            let data = await res.json()
            console.log(data)
        }

        getData()

    }, [])


  return (
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptas officia laborum numquam ad quaerat, minus, eos, rem beatae explicabo officiis tempore! Molestias quasi ut porro quibusdam omnis nisi odio.</div>
  )
}

export default Example