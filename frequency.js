// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


function same (arr1, arr2){
    // if array length are not equal return false
    if(arr1.length != arr2.length){
        return false
    }
    // declare two objects 
    let frequencyCounter1={}
    let frequencyCounter2={}
    // insert both the array into the object with count
    for (const i of arr1) {
        frequencyCounter1[i] =(frequencyCounter1[i] || 0) + 1
    }

    for (const i of arr2) {
        frequencyCounter2[i]=(frequencyCounter2[i]|| 0) + 1
    }

    // compare the object and return

    for (const key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key]!=frequencyCounter2[key **2]){
            return false
        }
    }
    return true
}
console.log(same([1,2,3], [4,1,9])) 