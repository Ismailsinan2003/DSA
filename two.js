function validAnagram(str1, str2){
//   if length of both string is not equal then false
     if(str1.length !== str2.length){
         return false
     }
     
     let frequenctCounter1={}
     let frequenctCounter2={}
     
     for(const i of str1){
         frequenctCounter1[i] =(frequenctCounter1[i] || 0) +1
     }
     
     for(const i of str2){
         frequenctCounter2[i] = (frequenctCounter2[i] || 0) +1
     }
     
     for (const key in frequenctCounter1) {
        if(frequenctCounter1[key] !== frequenctCounter2[key]){
            return false
        }
     }
     return true
}

console.log(validAnagram('aaz', 'zza'))

