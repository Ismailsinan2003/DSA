function addsum(n){
    let sum=0
    for (let i = 1; i <= n; i++) {
        sum+=i    
    }console.log(sum)
}


var time1=performance.now()
addsum(1000000000)
var time2 = performance.now()

console.log(`time elapsed: ${(time2-time1) / 1000} seconds`)
