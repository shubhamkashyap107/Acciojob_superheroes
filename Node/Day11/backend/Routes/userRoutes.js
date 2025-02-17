const express = require("express")
const router = express.Router()
const {v4 : uuid} = require("uuid")



let db = [
    {
      "id": 101,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "age": 28,
      "role": "admin"
    },
    {
      "id": 102,
      "name": "Bob Smith",
      "email": "bob@example.com",
      "age": 34,
      "role": "user"
    },
    {
      "id": 103,
      "name": "Charlie Brown",
      "email": "charlie@example.com",
      "age": 25,
      "role": "moderator"
    },
    {
      "id": 104,
      "name": "David Lee",
      "email": "david@example.com",
      "age": 40,
      "role": "user"
    },
    {
      "id": 105,
      "name": "Emma Watson",
      "email": "emma@example.com",
      "age": 22,
      "role": "admin"
    }
  ]

  router.get("/users", (req, res) => {
    res.json(db)
  })


  router.post("/users", (req, res) => {
    db.push({...req.body, id : uuid()})
    res.json(db)
  })

  router.put("/users/:id", (req, res) => {
    const{id} = req.params
    let filArr = db.filter((item) => {
        return item.id != id
    })
    filArr.push({...req.body, id : id})
    db = filArr
    res.json(db)

  })
  router.delete("/users/:id", (req, res) => {
    const{id} = req.params
    let filArr = db.filter((item) => {
        return item.id != id
    })
    db = filArr
    res.json(db)
  })


  module.exports = {userRouter : router}