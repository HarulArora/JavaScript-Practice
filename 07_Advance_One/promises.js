// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // BD calls, cryptography, network
//     setTimeout(function () {
//         console.log('Async task is complete')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("Promise Consumed")
// })


// ----------------------------------------------------------------------------------------------------------


// new Promise(function (res, rej) {
//     setTimeout(function () {
//         console.log("Async TaskTwo")
//         res()
//     }, 1000)
// }).then(function () {
//     console.log("Promise done")
// })



// --------------------------------------------------------------------------------
// const promiseThree = new Promise(function (res, rej) {
//     setTimeout(function () {
//         res({ username: "Harul", email: "abc@gmail.com" })
//     }, 1000)
// })

// promiseThree.then(function (abc) {
//     console.log(abc.username)
// })


//-----------------------------------------------------------------------------------------------

// const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "Harul", password: "123" })
//         }
//         else {
//             reject("Error: Something went wrong")
//         }
//         resolve()
//     }, 1000)
// })

// promisefour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((userName) => {
//     console.log(userName)
// }).catch(function (error) {
//     console.log(error)
// }).finally(() => {
//     console.log("The Promise is either resolved or rejected")
// })

