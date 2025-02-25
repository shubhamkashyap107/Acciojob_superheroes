const express = require("express")
const app = express()


// app.get("/abc", (req, res) => {
//     res.send("Hello from API 1")
// })


// app.get("/ab?c", (req, res) => {
//     res.send("Hello from API 1")
// })


// app.get("/ab+c", (req, res) => {
//     res.send("Hello from API 1")
// })


// app.get("/ab*c", (req, res) => {
//     res.send("Hello from API 1")
// })


// app.get("/a(bc)?d", (req, res) => {
//     res.send("Hello from API 1")
// })


// app.get("/a(bc)+d", (req, res) => {
//     res.send("Hello from API 1")
// })




// app.get(/a/ , (req, res) => {
//     res.send("Hello from API 1")
// })



app.get(/.*mon$/ , (req, res) => {
    res.send("Hello from API 1")
})



app.listen(8080, () => {
    console.log("Server connected to port 8080")
})



let email = "sdfsdfsdf"