function countUniqueValues (arr){
    if(arr.length ==0){
        return 0
    }
    let counter=1
    let i =0
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] != arr[j]){
            i=j
            counter+=1
        }   
    }
    return counter 
}

console.log(countUniqueValues([1,1,1,1,1,2]))