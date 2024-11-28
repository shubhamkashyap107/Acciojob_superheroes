const button = document.getElementById("btn")
const input = document.getElementById("input")
const ta = document.getElementById("textarea")
const w1 = document.getElementById("warning1")
const w2 = document.getElementById("warning2")

button.addEventListener("click", () => {
    if(input.value == "")
    {
        w1.classList.remove("d-none")
    }
    if(!ta.value)
    {
        w2.classList.remove("d-none")
    }
})
input.addEventListener("input", () => {
    if(input.value)
    {
        w1.classList.add("d-none")
    }
})
ta.addEventListener("input", () => {
    if(ta.value)
    {
        w2.classList.add("d-none")
    }
})