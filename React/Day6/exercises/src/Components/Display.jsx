import { useState } from "react"



const Display = () => {


    // let showDiv = false
    // console.log(showDiv)

    const[showDiv, setShowDiv] = useState(false)
    console.log(showDiv)


    return (
        <div>
            <button onClick={() => {
                // showDiv = !showDiv
                setShowDiv(!showDiv)
            }}>{showDiv ? "Hide" : "Show"}</button>
            <div style={showDiv ? {height : "150px", width : "150px" , display : "block", backgroundColor : 'red'}
             : {height : "150px", width : "150px" , display : "none", backgroundColor : "red"}}></div>
        </div>
    )
}

export default Display