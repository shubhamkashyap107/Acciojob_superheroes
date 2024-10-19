const arr = [23, 45, 12, 89, 34, 56, 78, 11, 90, 67,
     32, 44, 19, 66, 28, 50, 81, 39, 15, 72];


function quickSort(arr)
{
    if(arr.length == 0 || arr.length == 1)
    {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] <= pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }

    }
    left = quickSort(left)
    right = quickSort(right)
    return ([...left, pivot, ...right])
}

console.log(quickSort(arr))
