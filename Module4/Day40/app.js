const button = document.getElementById("btn")
const container = document.getElementById("container")


button.addEventListener("click", () => {

    const getData = async () => {
        let res = await fetch("https://dummyjson.com/quotes")
        let data = await res.json()

        for(let item of data.quotes)
        {
            // console.log(item)
            let outerDiv = document.createElement("div")

            // outerDiv.addEventListener("click", () => {
            //     outerDiv.remove()
            // })

            let authorName = document.createElement("h3")
            let quotesText = document.createElement("p")
            let delBtn = document.createElement("button")
            delBtn.innerText = "🗑️"

            delBtn.addEventListener("click", () => {
                delBtn.parentElement.remove()
            })

            authorName.innerText = item.author
            quotesText.innerText = item.quote

            outerDiv.append(quotesText)
            outerDiv.append(authorName)
            outerDiv.append(delBtn)

            outerDiv.style.border = "2px solid pink"
            outerDiv.style.margin = "20px"
            outerDiv.style.padding = "10px"


            container.append(outerDiv)

        }

    }

    getData()

})




















