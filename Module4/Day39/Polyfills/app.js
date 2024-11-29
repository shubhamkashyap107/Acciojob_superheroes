if(!Array.prototype.includes)
{
    Array.prototype.includes = function(item){
        for(let o of this)
        {
            if(o == item )
            {
                return true
            }
        }
        return false
    }
}



let arr = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]

console.log(arr.includes(5))
console.log(arr2.includes(5))



if(!String.prototype.contains)
{
    String.prototype.contains = function(s){
        for(let i = 0; i < this.length; i++)
        {
            if(this.charAt(i) == s)
            {
                return true
            }
        }

        return false
    }
}


let ansq = "jlksdf".contains("f")
console.log(ansq)

console.log(String.prototype)



if(String.prototype.toLowerCase)
{
    String.prototype.toLowerCase = function(){
        let ans = ""

        for(let i = 0; i < this.length; i++)
        {
            ans += "😃"
        }

        return ans
    }
}


let ans = ";oisdf;oishdfhsudf".toLowerCase()
console.log(ans)



