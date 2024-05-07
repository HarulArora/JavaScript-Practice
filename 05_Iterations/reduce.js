const myNums=[1,2,3,4]

const total = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and current value is ${currval}`)
    return acc+currval
}, 0)

console.log(total)