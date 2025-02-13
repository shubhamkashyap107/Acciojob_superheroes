// const express = require("express")
// const app = express()
// const port = 8080



// app.use("/add", express.json()) // unless explicitly specified

// app.get("/", (req, res) => {
//     res.status(200).send("Hello world")
// })


// app.get("/test", (req, res) => {
//     res.status(202)
//     res.json({})
//     console.log("OKAY")
// })


// app.get("/menu/:id", (req, res) => {
//     const {id} = req.params
//     console.log(id)
//     res.send("OKAY")
// })


// app.get("/search", (req, res) => {
//     console.log(req.query)
//     res.send("Hello ji")
// })



// app.post("/add", (req, res) => {
//     console.log(req.body)
//     res.send("Hiiiiii")
// })


// app.post("/addtwo", (req, res) => {
//     console.log(req.body)
//     res.send("Hiiiiii")
// })



// app.listen(port, () => {
//     console.log("Server connected to PORT 8080")
// })




const express = require("express")
const cors = require("cors")
const{v4 : uuid} = require("uuid")
const app = express()

app.use(cors())
app.use(express.json())

let db = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 28,
      "city": "New York"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "age": 32,
      "city": "Los Angeles"
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "email": "mikej@example.com",
      "age": 40,
      "city": "Chicago"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "email": "emilyd@example.com",
      "age": 24,
      "city": "Houston"
    },
    {
      "id": 5,
      "name": "Robert Brown",
      "email": "robertb@example.com",
      "age": 36,
      "city": "Miami"
    },
    {
      "id": 6,
      "name": "Sarah Wilson",
      "email": "sarahw@example.com",
      "age": 29,
      "city": "San Francisco"
    },
    {
      "id": 7,
      "name": "David Lee",
      "email": "davidl@example.com",
      "age": 45,
      "city": "Seattle"
    },
    {
      "id": 8,
      "name": "Jessica Miller",
      "email": "jessicam@example.com",
      "age": 31,
      "city": "Boston"
    },
    {
      "id": 9,
      "name": "William Anderson",
      "email": "williamand@example.com",
      "age": 50,
      "city": "Denver"
    },
    {
      "id": 10,
      "name": "Olivia Martinez",
      "email": "oliviam@example.com",
      "age": 27,
      "city": "Austin"
    }
  ]
  
  
app.get("/users", (req, res) => {
    res.status(200).send(db)
})

app.get("/users/:id", (req, res) => {
    const {id} = req.params
    const foundUser = db.find((item) => {
        return item.id == id
    })
    res.status(200).send(foundUser)
})



app.post("/users", (req, res) => {
    const{name , email, age, city} = req.body
    db.push({name, email, age, city, id : uuid() })
    res.status(200).send(db)
})



app.put("/users/:id", (req, res) => {
    const {id} = req.params
    const{name , email, age, city} = req.body

    // for(let item of db)
    // {
    //     if(item.id == id)
    //     {
    //         item.name = name
    //         item.email = email
    //         item.age = age
    //         item.city = city

    //         break;
    //     }
    // }


    let filteredArray = db.filter((item) => {
        return item.id != id
    })

    filteredArray.push({name, email, age, city, id})

    db = filteredArray

    res.status(200).send(db)


})

app.delete("/users/:id", (req, res) => {
    let filteredArray = db.filter((item) => {
        return item.id != id
    })
    db = filteredArray

    res.status(200).send(db)

})


app.delete("/deleteall", (req, res) => {
    db = []
    res.status(200).send(db)
})





app.listen(8080, () => {
    console.log("Server Connected to port 8080")
})
















