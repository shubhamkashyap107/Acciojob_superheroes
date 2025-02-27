const express = require("express")
const app = express()
const{v4 : uuid} = require("uuid")
const cors = require("cors")
const mongoose = require("mongoose")
const{User} = require("./Models/Users") 

const dbUrl = "mongodb+srv://shubham:qwerty123@cluster0.mufy0.mongodb.net/MeraDatabase?retryWrites=true&w=majority&appName=Cluster0"



mongoose.connect(dbUrl)
.then(() => {
  console.log("DB Connected")
})
.catch((e) => {
  console.log(e)
})


  app.use(express.json())
  app.use(cors())


app.get("/users", async(req, res) => {
    let allUsers =  await User.find({})
    res.status(200).json(allUsers)
})

app.post("/users", async(req, res) => {
  await User.insertOne(req.body)
  res.status(200).json({msg : "true"})
})

app.put("/users/:id", async(req, res) => {
    const{id} = req.params

    await User.findByIdAndUpdate({_id : id}, req.body)

    res.json({msg : "true"})

})

app.delete("/users/:id", async(req, res) => {
    const{id} = req.params

    // console.log(id)

    await User.findByIdAndDelete({_id : id})

    const allUsers = await User.find({})

    res.status(200).json(allUsers)

})

app.get("/getuserdata/:id", async(req, res) => {
   const foundItem = await User.findById(req.params.id)
   res.status(200).json(foundItem)
})





app.listen(8080, () => {
    console.log("Server connected to port 8080")
})