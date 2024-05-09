class User {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log("Logged in")
    }

    static createID() {
        return '123'
    }

}

const harul = new User("Kakarot")
console.log(harul.createID())