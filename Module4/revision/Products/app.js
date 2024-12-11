let box = document.getElementById("container")
let searchBar = document.getElementById("search")
let button = document.getElementById("btn")
let datafromapi = ""

searchBar.addEventListener("input", () => {
    if(searchBar.value == "")
    {
        box.innerHTML = ""



    for(let item of datafromapi)
        {
    
            let card = document.createElement("div")
            let name = document.createElement("h3")
            let image = document.createElement("img")
            let price = document.createElement("p")
    
            image.src = item.images[0]
            name.innerText = item.title
            price.innerText = item.price
    
            card.append(name)
            card.append(image)
            card.append(price)
    
            card.classList.add("c")
    
            box.append(card)
    
        }
    }

})

button.addEventListener("click", () => {
    if(!searchBar.value)
    {
        return
    }

    let filteredData = datafromapi.filter((item) => {
        if(item.title.toLowerCase().includes(searchBar.value.toLowerCase()))
        {
            return item
        }
    })
       

    box.innerHTML = ""

    for(let item of filteredData)
        {

            let card = document.createElement("div")
            let name = document.createElement("h3")
            let image = document.createElement("img")
            let price = document.createElement("p")

            image.src = item.images[0]
            name.innerText = item.title
            price.innerText = item.price

            card.append(name)
            card.append(image)
            card.append(price)

            card.classList.add("c")

            box.append(card)

        }



})


document.addEventListener("DOMContentLoaded", () => {

    // fetch("https://dummyjson.com/products")
    // .then((res) => {
    //     return res.json()
    // })
    // .then((data) => {
    //     console.log(data)
    // })

    async function getData()
    {
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json()
        datafromapi = data.products
        
        for(let item of data.products)
        {

            let card = document.createElement("div")
            let name = document.createElement("h3")
            let image = document.createElement("img")
            let price = document.createElement("p")

            image.src = item.images[0]
            name.innerText = item.title
            price.innerText = item.price

            card.append(name)
            card.append(image)
            card.append(price)

            card.classList.add("c")

            box.append(card)

        }


    }
    getData()


})