var http = require("http")

const arr = [
    { id: 1, name: "Laptop", category: "Electronics", price: 900 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 700 },
    { id: 3, name: "Tablet", category: "Electronics", price: 300 },
    { id: 4, name: "Smartwatch", category: "Electronics", price: 250 },
    { id: 5, name: "Headphones", category: "Electronics", price: 120 },
    { id: 6, name: "Sofa", category: "Furniture", price: 1500 },
    { id: 7, name: "Dining Table", category: "Furniture", price: 850 },
    { id: 8, name: "Chair", category: "Furniture", price: 100 },
    { id: 9, name: "Bed", category: "Furniture", price: 2000 },
    { id: 10, name: "Bookshelf", category: "Furniture", price: 300 },
    { id: 11, name: "T-Shirt", category: "Clothing", price: 25 },
    { id: 12, name: "Jeans", category: "Clothing", price: 50 },
    { id: 13, name: "Jacket", category: "Clothing", price: 120 },
    { id: 14, name: "Sneakers", category: "Clothing", price: 80 },
    { id: 15, name: "Cap", category: "Clothing", price: 20 },
    { id: 16, name: "Novel", category: "Books", price: 15 },
    { id: 17, name: "Science Book", category: "Books", price: 50 },
    { id: 18, name: "History Book", category: "Books", price: 40 },
    { id: 19, name: "Cookbook", category: "Books", price: 35 },
    { id: 20, name: "Comics", category: "Books", price: 25 }
    ];

let server = http.createServer((req, res) => {
    if(req.url == "/")
    {
        res.end("Root route")
    }
    else if(req.url == "/items/all")
    {
        res.end(JSON.stringify(arr))
    }
    else if(req.url == "/items/electronics")
    {
        let filArr = arr.filter((item) => {
            return item.category == "Electronics"
        })
        res.writeHead(299, {"content-type" : "text/json"})
        res.end(JSON.stringify(filArr))
    }
    else if(req.url == "/items/furniture")
        {
            let filArr = arr.filter((item) => {
                return item.category == "Furniture"
            })
            res.end(JSON.stringify(filArr))
        }
        else if(req.url == "/items/clothing")
        {
            let filArr = arr.filter((item) => {
                return item.category == "Clothing"
            })
            res.end(JSON.stringify(filArr))
        }
        else if(req.url == "/items/books")
        {
            let filArr = arr.filter((item) => {
                return item.category == "Books"
            })
            res.end(JSON.stringify(filArr))
        }
        else if(req.url == "/items/expensive")
        {
            let filArr = arr.filter((item) => {
                return item.price >= 500
            })
            res.end(JSON.stringify(filArr))
        }
        else{
            res.writeHead(404)
            res.end("Page Not found")
        }


})

server.listen(8080, () => {
    console.log("Server connected to port 8080")
})