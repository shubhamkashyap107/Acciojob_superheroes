// const box = document.getElementById("d")

// box.addEventListener("click", function(){
//     alert("Aur bhyi!!")
// })



// let lightBtn = document.getElementById("light")
// let darkBtn = document.getElementById("dark")
// let body = document.getElementsByTagName("body")


// lightBtn.addEventListener("click", () => {
//     body[0].style.backgroundColor = "yellow"
// })

// darkBtn.addEventListener("click", () => {
//     body[0].style.backgroundColor = "black"
// })



// const div = document.getElementById("box")
// const button = document.getElementById("btn")

// button.addEventListener("click", () => {
//     if(div.style.display == "none")
//     {
//         div.style.display = "block"
//     }
//     else
//     {
//         div.style.display = "none"
//     }
// })



// let outer = document.getElementById("outer")
// let middle = document.getElementById("middle")
// let inner = document.getElementById("inner")


// outer.addEventListener("click", () => {
//     console.log("Outer clicked")
// }, false)

// middle.addEventListener("click", () => {
//     console.log("Middle clicked")
// }, true)

// inner.addEventListener("click", () => {
//     console.log("Inner clicked")
// }, false)


let list = document.getElementById("list")

// console.log(list)

list.addEventListener("click", (event) => {
    if(event.target.tagName == "LI")
    {
        console.log("List item with the content " + event.target.innerText + " got clicked")
    }
})


let outer = document.getElementById("dabba")

outer.addEventListener("click", (e) => {
    if(e.target.tagName == "SPAN")
    {
        // e.target.remove()
        console.log(`Span with inner text of ${e.target.innerText} got clicked`)
    }
    else
    {
        console.log("BEkkar ka click")
    }
})