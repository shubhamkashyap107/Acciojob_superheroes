// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data = true

//         if(data)
//         {
//             resolve("User logged in successfully")
//         }
//         else
//         {
//             reject("Please Enter valid user details")
//         }
//     }, 3000)
// })

// p1
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("Mai toh chalunga hi chalunga")
// })


function clickPhoto()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Photu Kheech li")
            resolve()
        }, 3000)
    })
    
}

function selectPicture()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Photo Selected")
            resolve()
        }, 2000)
    })
    
}

function applyFilters()
{
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Filters applied")
            resolve()
        }, 2000)
    })
}

function selectCaption()
{  
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Caption Selected")
            resolve()
        }, 2000)
    })
}

function uploadPhoto()
{
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Photo uploaded")
            resolve()
        }, 2000) 
    })
}

clickPhoto()
.then(selectPicture)
.then(applyFilters)
.then(selectCaption)
.then(uploadPhoto)
.then(() => {
    console.log("Task completed successfully")
})





// clickPhoto(() => {
//     selectPicture(() => {
//         applyFilters(() => {
//             selectCaption(() => {
//                 uploadPhoto(() => {
//                     console.log("Task completed")
//                 })
//             })
//         })
//     })
// })


console.log("Kuch bhi")
