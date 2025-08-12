
function MaxSubArraySum(arr, num){
    let maxArray=0
    let temp=0

    if(arr.length < num){
        return null
    }

    for (let i = 0; i < num; i++) {
        maxArray+=arr[i]   
    }
    temp = maxArray
    for (let i = num ; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        maxArray=Math.max(maxArray, temp)   
    }
    return maxArray
}

console.log(MaxSubArraySum([4,2,1,6],1))


