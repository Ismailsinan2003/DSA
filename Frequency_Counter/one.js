
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(val1, val2){
    // return false if length of both value ids not equal
    if(val1.length!=val2.length){
        return false
    }
    //create objects for both the value with count
    let frequencyCounter1={}
    let frequencyCounter2={}

    //count the freq and add to the object
    for (const i of String(val1)) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
    }

    for (const i of String(val2)){
        frequencyCounter2[i]= (frequencyCounter2[i] || 0) + 1
    }

    // compare the objects
    for (const key in frequencyCounter1) {
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true

}
console.log(sameFrequency(22,222))