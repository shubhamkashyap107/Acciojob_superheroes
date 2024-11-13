let div = document.getElementById("box")

// div.addEventListener("click", () => {
//     console.log("Biv clicked")
// })



// div.addEventListener("mouseover", () => {
//     console.log("Mouse entered the div")
// })



div.addEventListener("click", () => {
    let age = prompt("Please Enter your age")
    let newHeading = document.createElement("h1")
    newHeading.innerText = age

    document.querySelector("body").appendChild(newHeading)
})



let input = document.getElementById("ip")
console.log(input)
let btn = document.getElementById("btn")


// input.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })



btn.addEventListener("click", () => {
    console.log(input.value)
})