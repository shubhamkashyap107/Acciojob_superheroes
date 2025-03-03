const express = require("express")
const app = express()
const{authMiddleware} = require("./src/Middlewares/authMiddleware")
const{authorMiddleware} = require("./src/Middlewares/authorMiddleware")



app.get("/users", authMiddleware,(req, res) => {
        res.send("API chal gya")
    })


app.get("/products",authMiddleware, (req,res) => {
    res.send("Products")
})


app.delete("/blogs/:id", authMiddleware ,authorMiddleware ,(req, res) => {
    res.send("Blog deleted")
})

// app.get("/users", 
// [(req, res, next) => {
//     console.log("OKAY - 2")
//     next()
// },
// (req, res, next) => {
//     console.log("OKAY - 1")
//     next()

// } ,
// (req, res, next) => {
//     console.log("OKAY")
//     next()
// }] ,
// (req, res, next) => {
//     res.send("API chal gya")
//     next()
// })


app.get("/products", () => {

})



app.listen(8080, () => {
    console.log("Server COnnecetd")
})