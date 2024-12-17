import { useState } from "react"

function MyName()
{

    // let name = "" 
    const[name, setName] = useState("")

    return (

        <>
        <input type="text" onChange={(e) => {
            setName(e.target.value)
        }} />
        {name ? <h1>My name is {name}</h1> : ""}
        {name && <h1>My name is {name}</h1>}
        </>
    )
}



export default MyName