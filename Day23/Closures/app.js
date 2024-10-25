// function a()
// {
//     var b = 10;

//     return function c()
//     {
//         console.log(b)
//     }


// }
// let fn = a()







function counter()
{
    var count = 0

    return {
        inc : () => {
            count++
        },
        dec : () => {
            count--
        }, 
        get : () => {
            console.log(count)
        }
    }
}

var CounterObj = counter()
CounterObj.inc()
CounterObj.inc()
CounterObj.inc()
CounterObj.inc()
CounterObj.get()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.dec()
CounterObj.get()