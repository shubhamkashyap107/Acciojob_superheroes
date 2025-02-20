import React, { useEffect, useState } from 'react'
import ShowData from './ShowData'

const Movies = () => {

    const[data, setData] = useState([])

    const [formData, setFormData] = useState(["", "", "", "", ""])
    console.log(formData)
  
    useEffect(() => {
      async function getData() {
        const res = await fetch("http://localhost:8080/movies")
        const data = await res.json()
        setData(data)
      }
      getData()
    }, [])



  return (
    <div style={{display : "flex", justifyContent: "space-between"}}>
            <div>
              <ShowData uiUpdater={setData} data={data} />
            </div>
            <div>
              <div style={{display : "flex", flexDirection : "column"}}>
                <input
                value={formData[0]}
                 onChange={(e) => {
                  // formData[0] = e.target.value

                  

                }} style={{width : "40vw", margin : "0px 0px 50px 0px", padding : "10px"}} type="text" />
                <input onChange={(e) => {
                  formData[1] = e.target.value
                }} style={{width : "40vw", margin : "0px 0px 50px 0px", padding : "10px"}} type="text" />
                <input onChange={(e) => {
                  formData[2] = e.target.value
                }} style={{width : "40vw", margin : "0px 0px 50px 0px", padding : "10px"}} type="text" />
                <input onChange={(e) => {
                  formData[3] = e.target.value
                }} style={{width : "40vw", margin : "0px 0px 50px 0px", padding : "10px"}} type="text" />
                <input onChange={(e) => {
                  formData[4] = e.target.value
                }} style={{width : "40vw", margin : "0px 0px 50px 0px", padding : "10px"}} type="text" />
                <button onClick={() => {
                  async function addMovie() {
                    let res = await fetch("http://localhost:8080/movies", {
                      method : "POST",
                      headers :{
                        "content-type" : "application/json"
                      },
                      body : JSON.stringify({
                        "title" : formData[0],
                        "genre" : formData[1],
                        "director" : formData[2],
                        "year" : formData[3],
                        "rating" : formData[4],
                      })
                    })

                    let data = await res.json()
                    // console.log(data)
                    setData(data)
                  }

                  addMovie()
                  
                }}>Send</button>
              </div>
            </div>
    </div>
  )
}

export default Movies