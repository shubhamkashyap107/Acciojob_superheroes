const{User} = require("../Models/Users")




const getAllUser = async(req, res) => {
    let allUsers =  await User.find({})
    res.status(200).json(allUsers)
}


const addUser = async(req, res) => {
  await User.insertOne(req.body)
  res.status(200).json({msg : "true"})
}

const updateUser =  async(req, res) => {
    const{id} = req.params

    await User.findByIdAndUpdate({_id : id}, req.body)

    res.json({msg : "true"})

}

const delUser = async(req, res) => {
    const{id} = req.params

    // console.log(id)

    await User.findByIdAndDelete({_id : id})

    const allUsers = await User.find({})

    res.status(200).json(allUsers)

}


const getUserData = async(req, res) => {
    const foundItem = await User.findById(req.params.id)
    res.status(200).json(foundItem)
 }


 module.exports = {
    getAllUser, addUser, updateUser, delUser, getUserData
 }