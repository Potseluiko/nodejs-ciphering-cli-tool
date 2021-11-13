const atbash = require("./ciphers/atbash")
const caesar = require("./ciphers/caesar")

const string = "ABCDE-abcde:XYZ-xyz"

console.log("atbash: ", string, " => ", atbash.encode(string))
console.log("caesar 1: ", string, " => ", caesar.encode(string, 3))
console.log("caesar 2: ", string, " => ", caesar.decode(string, 3))
console.log("caesar 3: ", string, " => ",caesar.decode(caesar.encode(string, 3), 3))
