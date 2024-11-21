function clickPhoto(callback)
{
    setTimeout(() => {
        console.log("Photu Kheech li")
        callback()
    }, 3000)
}

function selectPicture(callback)
{
    setTimeout(() => {
        console.log("Photo Selected")
        callback()
    }, 2000)
}

function applyFilters(callback)
{
    setTimeout(() => {
        console.log("Filters applied")
        callback()
    }, 2000)
}

function selectCaption(callback)
{  
    setTimeout(() => {
        console.log("Caption Selected")
        callback()
    }, 2000)
}

function uploadPhoto(callback)
{
    setTimeout(() => {
           console.log("Photo uploaded")
           callback()
    }, 2000) 
}








clickPhoto(() => {
    selectPicture(() => {
        applyFilters(() => {
            selectCaption(() => {
                uploadPhoto(() => {
                    console.log("Task completed")
                })
            })
        })
    })
})


console.log("Kuch bhi")
