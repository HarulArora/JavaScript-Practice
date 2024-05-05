//  Object Literals

// const mysymbol = Symbol("key1")

// const jsUser={
//     name : "Harul",
//     age : 20,
//     [mysymbol] : "MyKey",
//     location : "Hanumangarh",
//     email : "harularora463@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
// }

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser[mysymbol])

// jsUser.greeting = function(){
//     console.log("Hello JS user")
//     return 1
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello Js User ${this.name}`)
//     return 1
// }

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


// ---------------------------------------------------------------------------

// const user = {}

// user.id = 12345
// user.name = "Harul Arora"
// user.isLoggedIn = true

// console.log(user)



// ----------------------------------------------------------------------------

// const regularUser = {
//     email : "harularora463@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Harul",
//             lastname : "Arora" 
//         }  
//     } 
// }

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


// ---------------------Add two Objects---------------------------------- 

const obj1 = {1 : 2, 3 : 4}
const obj2 = {3 : 5, 4 : 6}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)