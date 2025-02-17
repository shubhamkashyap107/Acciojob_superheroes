const express = require("express")
const router = express.Router()
const {v4 : uuid} = require("uuid")




let db = [
    {
      "id": 201,
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 99.99,
      "stock": 50
    },
    {
      "id": 202,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 699.99,
      "stock": 30
    },
    {
      "id": 203,
      "name": "Running Shoes",
      "category": "Footwear",
      "price": 79.99,
      "stock": 100
    },
    {
      "id": 204,
      "name": "Laptop",
      "category": "Computers",
      "price": 1299.99,
      "stock": 20
    },
    {
      "id": 205,
      "name": "Gaming Mouse",
      "category": "Accessories",
      "price": 49.99,
      "stock": 75
    }
  ]
  

  router.get("/products", (req, res) => {
    res.json(db)
  })


  router.post("/products", (req, res) => {
    db.push({...req.body, id : uuid()})
    res.json(db)
  })

  router.put("/products/:id", (req, res) => {
    const{id} = req.params

    let foundItem = db.find((item) => {
        return item.id == id
    })

    if(foundItem)
    {

        let filArr = db.filter((item) => {
            return item.id != id
        })
        filArr.push({...req.body, id : id})
        db = filArr
        res.json(db)
    }
    else
    {
        res.send("Please send valid ID")
    }

  })
  router.delete("/products/:id", (req, res) => {
    const{id} = req.params
    let filArr = db.filter((item) => {
        return item.id != id
    })
    db = filArr
    res.json(db)
  })


  module.exports = {productRouter : router}