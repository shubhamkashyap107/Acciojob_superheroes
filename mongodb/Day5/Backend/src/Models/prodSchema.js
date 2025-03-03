const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    desc : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        trim : true
    }
}, {timestamps : true})

const Products = mongoose.model("Product", productSchema)


module.exports = {
    Products
}