// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters){
    // declare two objects for message and letters
    let messageCounter={}
    let lettersCounter={}

    //store the letters and messages with its frequency count
    for (const i of message) {
        messageCounter[i]=(messageCounter[i] ||0) + 1
    }

    for (const i of letters) {
        lettersCounter[i]=(lettersCounter[i] ||0) +1
    }

    for (const key in messageCounter) {
        if(!(key in lettersCounter)){
            return false 
        }
        if(messageCounter[key] > lettersCounter[key]){
            return false
        }
    }

    return true

    
}
console.log(constructNote('aabbcc', 'bcabcaddff'))