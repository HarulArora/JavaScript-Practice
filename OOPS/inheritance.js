// // const User = {
// //     name: "Harul",
// //     email: "abcabc@gmail.com"
// // }
// // const Teacher = {
// //     makeVideo: True
// // }

// // const TeachingSupport = {
// //     isAvailable: false
// // }

// // const TASupport = {
// //     makeAssignment: "JS Assignment",
// //     fullTime: true,
// //     __proto__: TeachingSupport
// // }


// // // Teacher.__proto__ = User      // Old Syntax

// // Object.setPrototypeOf(TeachingSupport, Teacher)  // Modern Syntax


// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class User {
//     constructor(username) {
//         this.username = username
//     }

//     logMe() {
//         console.log(`Username is ${this.username}`)
//     }
// }

// class teacher extends User {
//     constructor(username, email, password) {
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse() {
//         console.log("New Course was added")
//     }
// }

// const chai = new teacher("Harul", "abc@abc", "123")

// chai.addCourse()