const User = {
    name: "Harul",
    email: "abcabc@gmail.com"
}
const Teacher = {
    makeVideo: True
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}


// Teacher.__proto__ = User      // Old Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)  // Modern Syntax
