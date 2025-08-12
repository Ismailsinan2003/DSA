// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates(...args) {
    if(args.length <= 1){
        return false;
    }

    args.sort();  // sort the arguments array

    let i = 0;

    for (let j = 1; j < args.length; j++) {
        if(args[i] === args[j]){
            return true;  // duplicate found
        }
        i++;
    }

    return false;  // no duplicates found
}

console.log(areThereDuplicates(1, 2, 2));  // true
console.log(areThereDuplicates(1, 2, 3));  // false
