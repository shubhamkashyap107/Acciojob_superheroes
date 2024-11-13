// let div = document.getElementById("box")
// console.log(div)

// div.setAttribute("class", "container")

// console.log(div)

// const body = document.getElementsByTagName("body")
// // console.log(body)
// body[0].setAttribute("style", "background-color : white; color : black")


// const para = document.querySelector("p")
// const classOfP = para.getAttribute("class")
// console.log(classOfP)


// para.removeAttribute("class")

// console.log(para)


// let span = document.getElementsByClassName("a")[0]

// span.classList.add("KHSDF", "LKUSHDFJHSD")
// span.classList.remove("a")
// console.log(span.classList.contains("a"))
// span.classList.toggle("b")
// span.classList.toggle("f")



// const body = document.getElementsByTagName("body")[0]
// console.log(body)
// body.style.backgroundColor = "black"

// const para = document.getElementsByTagName("p")[0]
// para.style.fontSize = "40px"
// para.style.color = "green"



// const para = document.getElementsByTagName("p")

// console.log(para[0])


// let nayaDibba = document.createElement("div")
// nayaDibba.innerText = "hello from inside new div"
// let body = document.querySelector("body")
// body.appendChild(nayaDibba)
// nayaDibba.setAttribute("id", "newDiv")
// nayaDibba.classList.add("okay")



// let heading = document.querySelector("h1")
// heading.remove()

let list = document.querySelector("ul")
let items = document.getElementsByTagName("li")
console.log(items)
let dLi = items[2]

let newLi = document.createElement("li")
newLi.innerText = "C"


list.insertBefore(newLi, dLi)
