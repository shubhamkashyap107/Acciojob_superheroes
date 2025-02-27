const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    }
})


const User = mongoose.model("User", userSchema)



module.exports = {
    User
}

