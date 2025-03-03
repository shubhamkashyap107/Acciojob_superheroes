const dbUrl = "mongodb+srv://shubham:qwerty123@cluster0.mufy0.mongodb.net/MeraDatabase?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require("mongoose")



 function connectDB() {
     mongoose.connect(dbUrl)
     .then(() => {
        console.log("DB Connected")
     })
     .catch((e) => {
        console.log(e)
     })
}



module.exports = {
    connectDB
}