const atbash = require("./ciphers/atbash")
const caesar = require("./ciphers/caesar")
const rot8 = require("./ciphers/rot8")

const string = "ABCDE-abcde:XYZ-xyz"

console.log("atbash: ", string, " => ", atbash.encode(string))
console.log("caesar (encode 3): ", string, " => ", caesar.encode(string, 3))
console.log("caesar (decode 3)): ", string, " => ", caesar.decode(string, 3))
console.log("caesar (encode 3 + decode 3): ", string, " => ",caesar.decode(caesar.encode(string, 3), 3))
console.log("caesar (encode 8): ", string, " => ", caesar.encode(string, 8))
console.log("rot8 (encode): ", string, " => ", rot8.encode(string))
console.log("caesar (decode 8): ", string, " => ", caesar.decode(string, 8))
console.log("rot8 (decode): ", string, " => ", rot8.decode(string))
