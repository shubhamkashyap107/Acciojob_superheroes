// const div = document.getElementById("dabba")
// console.log(div)

// const div = document.getElementsByClassName("box")
// console.log(div)


// const div = document.getElementsByTagName("div")
// console.log(div)

// const div = document.querySelector("#dabba")
// const div = document.querySelector(".box")
// const div = document.querySelector("div")

// console.log(div)

// const divs = document.querySelectorAll("div")
// console.log(divs)


// const img = document.getElementById("img")
// console.log(img)


// let item = document.getElementById("nyota")
// console.log(item.innerText)
// console.log(item.innerHTML)
// console.log(item.textContent)

// item.innerText = "abc"
// item.innerText = "<h1>Hello world</h1>"
// item.innerHTML = "<h1>Hello world</h1>"



var fizzBuzz = function(n) {
    let ans = []


    for(let i = 1; i <= n; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            ans.push("fizzbuzz")
        }
        else if(i % 5 == 0)
        {
            ans.push("buzz")
        }
        else if(i % 3 == 0)
        {
            ans.push("fizz")
        }
        else
        {
            ans.push(String(i))
        }
    }

    return ans

};


let res = fizzBuzz(30)
console.log(res)