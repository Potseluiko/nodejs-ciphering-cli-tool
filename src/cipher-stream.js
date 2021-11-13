import { Transform } from "stream"

import atbash from "./ciphers/atbash.js"
import caesar from "./ciphers/caesar.js"
import rot8 from "./ciphers/rot8.js"

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

export function createCipherStream(cipherMark) {
  return new Transform({
    transform(chunk, encoding, callback) {
      callback(null, cipherByMark(cipherMark)(String(chunk)))
    }
  })
}
