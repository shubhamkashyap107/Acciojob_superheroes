const http = require("http")


let users = [
    { "name": "Aarav Sharma", "age": 28 },
    { "name": "Bhavya Patel", "age": 34 },
    { "name": "Chirag Mehta", "age": 25 },
    { "name": "Divya Iyer", "age": 40 },
    { "name": "Eshan Reddy", "age": 31 },
    { "name": "Farhan Khan", "age": 27 },
    { "name": "Gauri Deshmukh", "age": 38 },
    { "name": "Harshita Joshi", "age": 29 },
    { "name": "Ishaan Verma", "age": 35 },
    { "name": "Jhanvi Nair", "age": 26 },
    { "name": "Kunal Choudhary", "age": 42 },
    { "name": "Lavanya Saxena", "age": 33 },
    { "name": "Mihir Malhotra", "age": 30 },
    { "name": "Neha Pillai", "age": 37 },
    { "name": "Omkar Tiwari", "age": 24 },
    { "name": "Pranav Bhattacharya", "age": 39 },
    { "name": "Quasar Mukherjee", "age": 32 },
    { "name": "Riya Srivastava", "age": 28 },
    { "name": "Sandeep Kulkarni", "age": 36 },
    { "name": "Tanisha Gupta", "age": 41 }
  ]
  

const arr = [
    {
        name : "Dog",
        legs : 4
    },
    {
        name : "Kangaroo",
        legs : 2
    },
    {
        name : "Loyan",
        legs : 4
    },
]
const server = http.createServer((req, res) => {

    if(req.url == "/animals" && req.method == "GET")
    {
        res.end(JSON.stringify(arr))
    }
    else if(req.url == "/animal4" && req.method == "GET")
    {
        let filArr = arr.filter((items) => {
            return items.legs == 4
        })

        res.end(JSON.stringify(filArr))
    }
    else if(req.url == "/users")
    {
        let filArr = users.filter((items) => {
            return items.name.toLowerCase().includes("d")
        })
        res.end(JSON.stringify(filArr))
    }
    else if(req.url == "/users30")
    {
        let filArr = users.filter((items) => {
            return items.age >= 30
        })
        res.end(JSON.stringify(filArr))
    }

})





// const server = http.createServer((req, res) => {
//     if(req.method == "GET")
//     {
//         res.end("this is a get request")
//     }
//     else if(req.method == "POST")
//     {
//         res.end("this is a post request")

//     }
//     else if(req.method == "PUT")
//     {
//         res.end("this is a put request")

//     }
//     else if(req.method == "PATCH")
//     {
//     res.end("this is a patch request")

//     }
//     else if(req.method == "DELETE")
//     {
//     res.end("this is a delete request")

//     }
// })



// const server = http.createServer((req, res) => {

//     if(req.url == "/" && req.method == "GET")
//     {
//         res.end("This is a req on root route with get method")
//     }
//     else if(req.url == "/" && req.method == "POST")
//     {
//         res.end("This is a req on root route with post method")
//     }
//     else if(req.url == "/" && req.method == "PUT")
//     {
//         res.end("This is a req on root route with put method")
//     }

// })













server.listen(8080, () => {
    console.log("Server connected to port 8080")
})