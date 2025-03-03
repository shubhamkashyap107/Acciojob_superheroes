const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const{connectDB} = require("./DB")
const{router : userRoutes} = require("./Routes/UsersRoutes")



connectDB()

  app.use(express.json())
  app.use(cors())
  app.use(userRoutes)





app.listen(8080, () => {
    console.log("Server connected to port 8080")
})