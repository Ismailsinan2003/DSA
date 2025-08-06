function addsum(n){
    console.log (n *(n+1))/2
}

// console.log(addsum(3))

var time1=performance.now()
addsum(1000000000)
var time2 = performance.now()

console.log(`time elapsed: ${(time2-time1) / 1000} seconds`)