const express = require("express")
const{productRouter} = require("./Routes/productsRoutes")
const cors = require("cors")
const app = express()
const {connectDB} = require("./database")


connectDB()
app.use(express.json())
app.use(cors())
app.use(productRouter)




app.listen(8080, () => {
    console.log("Server Connected")
})