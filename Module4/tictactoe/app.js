const buttons = document.getElementsByClassName("btn")
const resetBtn = document.getElementById("resetBtn")



let turnX = true



for(let item of buttons)
{
    item.addEventListener("click", () => {
        if(turnX)
        {
            item.innerText = "❌"
            turnX = false
            item.disabled = true
        }
        else
        {
            item.innerText = "〇"
            turnX = true
            item.disabled = true

        }
    })

}


resetBtn.addEventListener("click", () =>{
    window.location.reload()
})