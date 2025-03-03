const express  = require("express")
const router = express.Router()
const{  getAllUser, addUser, updateUser, delUser, getUserData} = require("../Controllers/UserController")

router.get("/users", getAllUser)

router.post("/users",addUser)

router.put("/users/:id",updateUser)

router.delete("/users/:id", delUser)

router.get("/getuserdata/:id", getUserData)



module.exports = {
    router
}