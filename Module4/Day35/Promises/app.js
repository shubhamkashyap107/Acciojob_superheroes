let p = new Promise((resolve, reject) => {

    let dataFromAPI = false

    if(dataFromAPI == true)
    {
        resolve([1,2,3,4])
    }
    else
    {
        reject({gotData : false})
    }

})

let arr = []


p
.then((data) => {
    // console.log(data)
    arr = data
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log(arr)
})
