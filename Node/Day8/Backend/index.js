const express = require("express")
const app = express()
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');


let db = [

]

app.use(cors())
app.use(express.json())


app.post("/addtaskdata", (req, res) => {
    const{taskData, descriptionData} = req.body
    db.push({taskData, descriptionData, ID : uuidv4()})
    res.json(db)
})


app.delete("/delete/:id", (req, res) => {
    const {id} = req.params

    let filteredArray = db.filter((item) => {
        // return !item.ID.includes(id)
        return item.ID != id
    })
    // console.log(filteredArray)
    db = filteredArray
    res.json(db)
})




app.listen(8080, () => {
    console.log("Server connected to PORT")
})