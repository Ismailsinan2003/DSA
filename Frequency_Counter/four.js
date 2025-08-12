// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

function findAllDuplicates(arr){
    // declare a array to store
    let Duplicates=[]

    //declare a object to store the array value with the frequency
    let frequencyCounter={}

    for (const i of arr) {
        frequencyCounter[i] = (frequencyCounter[i] || 0) + 1
    }

    //run a loop and check the frequency count =2 and push that element to array
    for (const key in frequencyCounter) {
        if(frequencyCounter[key] == 2){
            Duplicates.push(Number(key))
        }
    }
    //return the array
    return Duplicates

}
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))