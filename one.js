function same(arr1, arr2) {
    if (arr1.length!=arr2.length){
        return false
    }
    let squared = {}
    let input = {}
    for (const i of arr1) {
        let square = i**2
        squared[square] = (squared[square] || 0) + 1
    }
    for (const i of arr2) {
        input[i]=(input[i] || 0) + 1
    }
    for (const i in squared) {
        if(input[i] !== squared[i]){
            return false
        }
    }
    console.log(squared)
    console.log(input)
    return true
}
console.log(same([1,2,3,4], [9,4,1,15]))



///////     Naive Approach
// function same(arr1, arr2){
//     if (arr1.length!=arr2.length) {
//         return false
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex=arr2.indexOf(arr1[i] **2)
//         if(correctIndex === -1){
//             return false
//         }
//         console.log(arr2)
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

// console.log(same([1,2,3], [9,4,1]))






