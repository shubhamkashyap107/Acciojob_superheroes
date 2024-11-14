let addBtn = document.getElementById("addBtn")
let taskTitle = document.getElementById("title")
let taskDesc = document.getElementById("desc")
let todoContainer = document.getElementById("todoContainer")



addBtn.addEventListener("click", () => {
 
    if(taskTitle.value == "" || taskDesc.value == "")
    {
        alert("Please enter task details")
        return
    }

    let task = document.createElement("div")

    let leftDiv = document.createElement("div")
    let rightDiv = document.createElement("div")

    let theading = document.createElement("h3")
    theading.innerText = taskTitle.value

    let tdesc = document.createElement("p")
    tdesc.innerText = taskDesc.value

    leftDiv.appendChild(theading)
    leftDiv.appendChild(tdesc)

    task.appendChild(leftDiv)

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"

    rightDiv.appendChild(delBtn)

    task.appendChild(rightDiv)

    todoContainer.appendChild(task)

    taskDesc.value = ""
    taskTitle.value = ""

})