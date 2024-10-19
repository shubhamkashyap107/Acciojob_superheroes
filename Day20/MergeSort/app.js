


function mergeSortedArrays(a1, a2)
{
    let i = 0;
    let j = 0;

    let ans = []

    while(i < a1.length && j < a2.length)
    {
        if(a1[i] <= a2[j])
        {
            ans.push(a1[i])
            i++
        }
        else
        {
            ans.push(a2[j])
            j++
        }
    }

    while(i < a1.length)
    {
        ans.push(a1[i])
        i++
    }

    while(j < a2.length)
    {
        ans.push(a2[j])
        j++
    }

    return ans
}


function mergeSort(arr)
{
    if(arr.length == 1)
    {
        return arr
    }

    let mid = Math.floor(( arr.length - 1) / 2)

    let left = mergeSort(arr.slice(0, mid + 1))
    let right = mergeSort(arr.slice(mid + 1))

    return mergeSortedArrays(left, right)
}


let ans = mergeSort([33,-10,22,45,98,3,2,1,67,98])
console.log(ans)