// const button = document.getElementById("btn")
// const clrbutton = document.getElementById("clrbtn")
// const dabba = document.getElementById("container")



// clrbutton.addEventListener("click", () => {
//     dabba.innerHTML = ""
// })

// button.addEventListener("click", () => {

//     fetch("https://hp-api.onrender.com/api/characters")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         for(let item of data)
//         {
//             let card = document.createElement("div")
//             let image = document.createElement("img")
//             let name = document.createElement("p")

//             if(item.image)
//             {
//                 image.setAttribute("src", item.image)
//             }
//             else
//             {
//                 image.setAttribute("src", "https://as1.ftcdn.net/v2/jpg/04/43/94/64/1000_F_443946404_7GUoIGZeyx7R7ymCicI3k0xPnrMoKDek.jpg")
//             }

//             image.style.width = "300px"
//             image.style.height = "450px"
//             name.innerText = item.name

//             card.appendChild(image)
//             card.appendChild(name)
//             dabba.appendChild(card)

//         }
//     })

// })




// const button = document.getElementById("btn")
// const clrbutton = document.getElementById("clrbtn")
// const dabba = document.getElementById("container")



// clrbutton.addEventListener("click", () => {
//     dabba.innerHTML = ""
// })

// button.addEventListener("click", () => {
//     async function getData()
//     {

//         let data = await fetch("https://hp-api.onrender.com/api/characters")
//         let finalData = await data.json()
//         for(let item of finalData)
//         {
//             let card = document.createElement("div")
//             let image = document.createElement("img")
//             let name = document.createElement("p")

//             if(item.image)
//             {
//                 image.setAttribute("src", item.image)
//             }
//             else
//             {
//                 image.setAttribute("src", "https://as1.ftcdn.net/v2/jpg/04/43/94/64/1000_F_443946404_7GUoIGZeyx7R7ymCicI3k0xPnrMoKDek.jpg")
//             }

//             image.style.width = "300px"
//             image.style.height = "450px"
//             name.innerText = item.name

//             card.appendChild(image)
//             card.appendChild(name)
//             dabba.appendChild(card)

//         }
//     }
//     getData()

// })


fetch("https://hp-api.onrender.com/api/characters")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})




async function getAPIdata()
{
    let res = await fetch("https://hp-api.onrender.com/api/characters")
    let data = await res.json()
    console.log(data)
}

getAPIdata()


