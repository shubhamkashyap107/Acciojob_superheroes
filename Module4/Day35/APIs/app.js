// let p = fetch("https://api.thecatapi.com/v1/images/search?limit=5")
// console.log(p)


// p
// .then((response) => {
//     console.log(response)
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })


// let res = p.then((response) =>  {
//     return response.json()
// })
// res.then((data) => {
//     console.log(data);
    
// })



// const button = document.getElementById("btn")
// const ClearButton = document.getElementById("clrBtn")
// const dabba = document.getElementById("container")
// const body = document.getElementById("bd")

// ClearButton.addEventListener("click", () => {
//     dabba.innerHTML = ""
// })

// button.addEventListener("click", () => {
//     fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         // console.log(data)
//         // dabba.innerHTML = ""
//         for(let item of data)
//         {
//             let img = document.createElement("img")
//             img.setAttribute("src", item.url)
//             img.classList.add("qwerty")
//             dabba.appendChild(img)
//         }
//     })
//     .catch(() => {
//         let heading = document.createElement("h1")
//         heading.innerText = "Server Down"
//         body.appendChild(heading)
//     })
// })

let button = document.getElementById("btn")
let clrbutton = document.getElementById("clrbtn")
let dabba = document.getElementById("dabba")



clrbutton.addEventListener("click", () => {
    dabba.innerHTML = ""
})



button.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        // dabba.innerHTML = ""
        let heading = document.createElement("h1")
        heading.innerText = data.value
        dabba.appendChild(heading)
    })
})