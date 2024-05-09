// const user = {
//     username: "Harul Arora",
//     loginCount: 10,
//     signedIn: true,

//     getUserDetails: function () {
//         console.log("Got user Details from database")
//         console.log(`Username: ${this.username}`)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())


// -------------------------------------------------------------------------------------

function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}