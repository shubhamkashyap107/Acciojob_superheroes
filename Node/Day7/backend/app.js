const express = require("express")
const app = express()


app.use(express.json())


let details = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "+1-555-123-4567"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "phone": "+1-555-987-6543"
    },
    {
      "id": 3,
      "name": "Charlie Davis",
      "email": "charlie.davis@example.com",
      "phone": "+1-555-456-7890"
    },
    {
      "id": 4,
      "name": "Diana Roberts",
      "email": "diana.roberts@example.com",
      "phone": "+1-555-321-6789"
    },
    {
      "id": 5,
      "name": "Ethan Wilson",
      "email": "ethan.wilson@example.com",
      "phone": "+1-555-654-3210"
    }
  ]


  let users = [
    { id: 1, name: "Alice Johnson", phone: "+1-555-123-4567" },
    { id: 2, name: "Bob Smith", phone: "+1-555-987-6543" },
    { id: 3, name: "Charlie Davis", phone: "+1-555-456-7890" },
    { id: 4, name: "Diana Roberts", phone: "+1-555-321-6789" },
    { id: 5, name: "Ethan Wilson", phone: "+1-555-654-3210" }
  ];
  

  
  
app.get("/", (req, res) => {
    res.send("Root route")
})

app.get("/about", (req, res) => {
    res.status(200).send("This is about route")
})

app.get("/contact", (req, res) => {
    res.status(200).json(users)
})

app.post("/login", (req,res) => {
    console.log(req.body)
    res.status(200).send("User logged in")
})

app.put("/login", (req, res) => {
    res.send("hello")
})

app.patch("/login", (req, res) => {
    res.send("OPkay")
})


app.delete("/login", (req, res) => {
    res.send("hehe")
})


app.get("/restaurants/:id", (req, res) => {
    const {id} = req.params
    console.log(id)
    res.send("Shi req hai bhai")
})

app.post("/kuchbhi", (req, res) => {
    console.log(req.body)
    res.send("theek hai")
})

app.get("/restaurants/:id/data", (req, res) => {
    const {id} = req.params
    console.log(id)
    res.send("Shi req hai bhai part 2")
})

app.get("/search", (req, res) => {
    console.log(req.query)
    res.send("Shi hai firse")
})


app.listen(8080, () => {
    console.log("Server connected to PORT 8080")
})