const mongoose = require("mongoose")
const url = "mongodb+srv://shubham:qwerty123@cluster0.mufy0.mongodb.net/MeraDatabase?retryWrites=true&w=majority&appName=Cluster0"



function connectDB() {
    mongoose.connect(url)
    .then(() => {
        console.log("DB Connected")
    }) 
    .catch(() => {
        console.log("DB not Connected")
    })
}



module.exports = {
    connectDB
}

