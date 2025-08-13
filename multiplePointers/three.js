// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false

function findPair(arr, n) {
    if (!arr || arr.length < 2) return false;
    
    n = Math.abs(n); // handle negative n
    arr.sort((a, b) => a - b);

    let i = 0;
    let j = 1;

    while (i < arr.length && j < arr.length) {
        if (i !== j) {
            let diff = arr[j] - arr[i];

            if (diff === n) return true;
            else if (diff < n) j++;  // increase difference
            else i++;                // decrease difference
        } else {
            j++; // ensure two distinct elements
        }
    }
    return false;
}


console.log(findPair([6,1,4,10,2,4], 2))