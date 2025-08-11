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
    return true
}
console.log(same([1,2,1], [4,4,1]))






