const express = require("express")
// const movieRouter = require("./Routes/movieRoutes")
const{movieRouter} = require("./Routes/movieRoutes")
const{userRouter} = require("./Routes/userRoutes")
const{productRouter} = require("./Routes/productRoutes")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())
app.use(movieRouter)
app.use(userRouter)
app.use(productRouter)






app.listen(8080, () => {
    console.log("Server connected to port 8080")
})