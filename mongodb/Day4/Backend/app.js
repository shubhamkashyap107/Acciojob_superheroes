const express = require("express")
const app = express()
const{v4 : uuid} = require("uuid")
const cors = require("cors")

let db = [
    {
      "id": 1,
      "name": "John Doe",
      "password": "password123",
      "age": 25
    },
    {
      "id": 2,
      "name": "Alice Smith",
      "password": "alice@456",
      "age": 30
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "password": "bob_secure!",
      "age": 28
    },
    {
      "id": 4,
      "name": "Emma Brown",
      "password": "emma#pass",
      "age": 22
    },
    {
      "id": 5,
      "name": "David Wilson",
      "password": "david2024",
      "age": 35
    }
  ]

  app.use(express.json())
  app.use(cors())


app.get("/users", (req, res) => {
    res.status(200).send(db)
})

app.post("/users", (req, res) => {
  console.log(req.body)
    db.push({...req.body, id : uuid()})
    res.status(201).json({"msg" : "true"})
})

app.put("/users/:id", (req, res) => {
    const{id} = req.params
    db = db.filter((item) => {
        return item.id != id
    })
    db.push({...req.body, id})
    res.status(201).json({"msg" : "true"})

})

app.delete("/users/:id", (req, res) => {
    const{id} = req.params
    db = db.filter((item) => {
        return item.id != id
    })
    res.send(db)

})

app.get("/getuserdata/:id", (req, res) => {
  const foundItem = db.find((item) => {
    return item.id == req.params.id
  })
  res.json(foundItem)
})





app.listen(8080, () => {
    console.log("Server connected to port 8080")
})