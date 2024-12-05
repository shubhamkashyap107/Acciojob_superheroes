const buttons = document.getElementsByClassName("btn")
const resetBtn = document.getElementById("resetBtn")
const wm = document.getElementById("winningMsg")
let turnX = true
let winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]



let countMoves = 0


// function handleDraw()
// {
//     let count = 0

//     for(let item of buttons)
//     {
//         if(item.innerText != "")
//         {
//             count++
//         }
//     }

//     if(count == 9)
//     {
//         wm.innerText = "It's a draw, try again!"
//         return true
//     }
//     return false
// }

function disableAllBtns()
{
    for(let item of buttons)
    {
        item.disabled = true
    }
}

function checkWinner()
{
    for(let item of winners)
    {
        let s1 = buttons[item[0]].innerText
        let s2 = buttons[item[1]].innerText
        let s3 = buttons[item[2]].innerText

        if(s1 == "❌" && s2 == "❌" && s3 == "❌")
        {
            console.log("Player 1 wins")
            wm.innerText = "Player 1 win"
            disableAllBtns()

            setTimeout(()=> {
                window.location.reload()
            }, 5000)

            return true

        }
        else if(s1 == "〇" && s2 == "〇" && s3 == "〇")
        {
            console.log("Player 2 wins")
            wm.innerText = "Player 2 win"
            disableAllBtns()

            setTimeout(()=> {
                window.location.reload()
            }, 5000)


            return true
        }
    }
}



for(let item of buttons)
{
    item.addEventListener("click", () => {
        if(turnX)
        {
            countMoves++
            item.innerText = "❌"
            turnX = false
            item.disabled = true
            let flag = checkWinner()
            if(flag)
            {
                return 
            }

            if(countMoves == 9)
            {
                wm.innerText = "It's a draw, try again!"
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
            }

            // let val = handleDraw()
            // if(val)
            // {
            //     setTimeout(() => {
            //         window.location.reload()
            //     }, 5000)
            // }
        }
        else
        {
            countMoves++
            item.innerText = "〇"
            turnX = true
            item.disabled = true
            let flag = checkWinner()
            if(flag)
            {
                return true
            }
            if(countMoves == 9)
            {
                wm.innerText = "It's a draw, try again!"
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
            }
            // let val = handleDraw()
            // if(val)
            // {
            //     setTimeout(() => {
            //         window.location.reload()
            //     }, 5000)
            // }
        }
    })

}


resetBtn.addEventListener("click", () =>{
    window.location.reload()
})