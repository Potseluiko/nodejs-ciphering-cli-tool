import { encodeHelper } from "./helper.js"

const encode = (value, shift = 0) => {
  return encodeHelper(value, (charCode, startCharCode, endCharCode) => {
    const length = endCharCode - startCharCode + 1

    return String.fromCharCode(startCharCode + ((charCode - startCharCode + shift) % length))
  })
}

const decode = (value, shift = 0) => {
  return encodeHelper(value, (charCode, startCharCode, endCharCode) => {
    const length = endCharCode - startCharCode + 1

    return String.fromCharCode(startCharCode + ((charCode - startCharCode - shift + length) % length))
  })
}

export default { encode, decode }
