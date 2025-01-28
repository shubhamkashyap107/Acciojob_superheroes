const http = require("http")



let users = [
    {
        name : "sdfsdf",
        age : 56
    },
    {
        name : "sdfsdf",
        age : 56
    },
    {
        name : "sdfsdf",
        age : 56
    },
    {
        name : "sdfsdf",
        age : 56
    },
    {
        name : "sdfsdf",
        age : 56
    },
    {
        name : "sdfsdf",
        age : 56
    },

]



let foodItems = [
    {
        name : "sdfsdf",
        price : 45
    },


    {
        name : "sdfsdf",
        price : 45
    },
    {
        name : "sdfsdf",
        price : 45
    },
    {
        name : "sdfsdf",
        price : 45
    },
    {
        name : "sdfsdf",
        price : 45
    },
    {
        name : "sdfsdf",
        price : 45
    },
    {
        name : "sdfsdf",
        price : 45
    },
    {
        name : "sdfsdf",
        price : 45
    },

]

const server = http.createServer((req, res) => {
    if(req.url == "/users")
    {
        res.end(JSON.stringify(users))
    }
    else if(req.url == "/food")
    {
        res.end(JSON.stringify(foodItems))
    }
    else
    {
        res.end("Please enter a valid route")
    }
})


server.listen(8080, () => {
    console.log("Server connected to port")
})