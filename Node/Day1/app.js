console.log("OK")


// setInterval(() => {
//     console.log("OKAY")
// }, 2000)



fetch("https://hp-api.onrender.com/api/characters")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
