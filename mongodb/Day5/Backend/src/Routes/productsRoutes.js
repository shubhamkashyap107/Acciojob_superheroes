const express = require("express")
const{Products} = require('../Models/prodSchema')

const productRouter = express.Router()

productRouter.get("/products", async(req, res) => {
    let data = await Products.find({})
    res.status(200).json(data)
})
productRouter.post("/products", async(req, res) => {
    await Products.insertOne(req.body)
    res.json({msg : "Success"})
})
productRouter.put("/products/:id", async(req, res) => {
   await Products.findByIdAndUpdate({_id : req.params.id}, req.body)
   res.json({msg : "Success"})
})
productRouter.delete("/products/:id", async(req, res) => {
    await Products.findOneAndDelete(req.params.id)
    res.json({msg : "Success"})

})


module.exports = {
    productRouter
}

