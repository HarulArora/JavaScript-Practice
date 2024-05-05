// const arr=[1,2,3,4,5,6,7,8,9]
// const arr2=["Harul", "Arora"]
// const arr3=new Array(12,43,53,23)
// console.log(arr[4])


// const myarray=[2,6,7,42]
// console.log(myarray)
// myarray.push(69)
// myarray.push(6102)
// console.log(myarray)
// myarray.pop()
// console.log(myarray)
// console.log(myarray.includes(6))
// console.log(myarray.indexOf(3))
// console.log(myarray.indexOf(42))

// const newArr = myarray.join()
// console.log(newArr)
// console.log(typeof newArr)


// slice, splice

// const myA=[1,2,3,4,5,6,7,8]
// console.log("A", myA)
// const myn1=myA.slice(1,3)
// console.log("B", myA)
// console.log(myn1)

// console.log("A", myA)
// const myn2=myA.splice(1,3)
// console.log("B", myA)
// console.log(myn2)

//  ------------------------------------------------------------

// const marvel= ["thor", "Ironman", "Spiderman"]
// const dc= ["superman", "flash", "batman"]
// const arr=marvel.concat(dc)
// console.log(arr)


// ------------------------Spread-----------------------------------

// const marvel= ["thor", "Ironman", "Spiderman"]
// const dc= ["superman", "flash", "batman"]
// const heros=[...marvel, ...dc]
// console.log(heros)


// --------------------------flat----------------------------------------

// const a=[1,2,3,[4,5,64,[324,345,6,433,324234]]]
// const flatarray=a.flat(Infinity)
// console.log(flatarray)


// ----------------------------Convert to array--------------------------

// console.log(Array.from("Harul Arora"))



//-----------------------------Array from set of elements-------------------------

let a=10
let b=20
let c=30
console.log(Array.of(a,b,c))
