const caesar = require("./caesar.js")

const encode = (value) => caesar.encode(value, 8)
const decode = (value) => caesar.decode(value, 8)

module.exports = { encode, decode }
