const express = require('express');
const{v4 : uuid} = require("uuid")

const router = express.Router()



let db = [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925,
      "genre": "Fiction"
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960,
      "genre": "Classic"
    },
    {
      "id": 3,
      "title": "1984",
      "author": "George Orwell",
      "year": 1949,
      "genre": "Dystopian"
    },
    {
      "id": 4,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951,
      "genre": "Classic"
    },
    {
      "id": 5,
      "title": "Moby Dick",
      "author": "Herman Melville",
      "year": 1851,
      "genre": "Adventure"
    }
  ]
  
  
  router.get("/", (req, res) => {
      res.status(200).send(db)
  })
  
  
  router.get("/:id", (req, res) => {
      const{id} = req.params
      const foundItem = db.find((item) => {
          return item.id == id
      })
      res.status(200).send(foundItem)
  })
  
  router.post("/", (req, res) => {
      const{title, author, year, genre} = req.body
      db.push({title, year, genre, author, id : uuid()})
      res.status(200).send(db)
  })
  
  
  router.put("/:id", (req, res) => {
      const{id} = req.params
      const{title, author, year, genre} = req.body
  
      let filArr = db.filter((item) => {
          return item.id != id
      })
  
      filArr.push({title, author, year, genre, id})
  
      db = filArr
  
      res.status(200).send(db)
  
  })
  
  
  router.delete("/:id", (req, res) => {
      const{id} = req.params
  
      db = db.filter((item) => {
          return item.id != id
      })
  
      res.status(200).send(db)
  
  })
  
  
  router.get("/:id1/:id2/:id3", (req, res) => {
      console.log(req.params)
      res.send("OKAY")
  })


  



  module.exports = {booksRouter : router}