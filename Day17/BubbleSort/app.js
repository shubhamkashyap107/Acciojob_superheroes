let arr = [345, 1,2,3,4]

for(let i = 0; i < arr.length - 1; i++)
{
    let isSwapped = false

    for(let j = 0; j < arr.length - 1 - i; j++)
    {
        console.log(i, j)
        if(arr[j] > arr[j + 1])
        {
            isSwapped = true
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }

    if(isSwapped == false)
    {
        break
    }

}


console.log(arr)


// function Sorting01(n, arr) {
  
// 	// Write your code here
// 	// Return the answer; Do not print anything here

// 	let c0 = 0
// 	let c1 = 0

// 	for(let item of arr)
// 	{
// 		if(item == 0)
// 		{
// 			c0++
// 		}
// 		else
// 		{
// 			c1++
// 		}
// 	}

// 	let ans = []

// 	for(let i = 0; i < c0; i++)
// 	{
// 		ans.push(0)
// 	}

// 	for(let i = 0; i < c1; i++)
// 	{
// 		ans.push(1)
// 	}
// 	return ans
// }