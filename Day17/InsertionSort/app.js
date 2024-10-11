let arr = [9, -7, 63, 75, 99, 2]

for(let i = 0; i < arr.length - 1; i++)
{
    let key = arr[i + 1]

    let j = i

    while(j >= 0)
    {
        if(arr[j] > key)
        {
            arr[j + 1] = arr[j]
            j--
        }
        else
        {
            break;
        }
    }
    arr[j + 1] = key
}

console.log(arr)