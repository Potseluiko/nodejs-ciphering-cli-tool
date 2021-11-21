const { Transform } = require("stream")

const atbash = require("./ciphers/atbash.js")
const caesar = require("./ciphers/caesar.js")
const rot8 = require("./ciphers/rot8.js")

function cipherByMark(cipherMark) {
  switch (cipherMark) {
    case "A":
      return (value) => atbash.encode(value)
    case "C0":
      return (value) => caesar.decode(value, 1)
    case "C1":
      return (value) => caesar.encode(value, 1)
    case "R0":
      return (value) => rot8.decode(value)
    case "R1":
      return (value) => rot8.encode(value)
    default:
      return (value) => value
  }
}

function createCipherStream(cipherMark) {
  return new Transform({
    transform(chunk, encoding, callback) {
      callback(null, cipherByMark(cipherMark)(String(chunk)))
    }
  })
}

module.exports = { createCipherStream }
