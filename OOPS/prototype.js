let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

let myArr = ["spiderman", "Batman"]

Object.prototype.harul = function () {
    console.log("Harul is present in all objects")
}

Array.prototype.heyHarul = function () {
    console.log("Harul Says Hello")
}

heroPower.harul()
myArr.heyHarul()