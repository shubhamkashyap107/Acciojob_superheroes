const express = require("express")
const router =  express.Router()




router.get("/users", (req, res) => {
    res.send("Okay from router / get ")
})

router.post("/users", (req, res) => {
    res.send("Okay from router / post ")

})




module.exports = {userRouter : router}