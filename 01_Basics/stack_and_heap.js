// Stack(Primitive), Heap(Non-Primitive)
// let myName = "Harul Arora"

// let anotherName = myName
// anotherName = "Kakarot"

// console.log(anotherName)
// console.log(myName)


let userOne = {
    email : "user@email.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Harul@google.com"

console.log(userOne.email)
console.log(userTwo.email)