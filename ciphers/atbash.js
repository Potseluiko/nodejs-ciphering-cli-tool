import { encodeHelper } from "./helper.js"

const encode = (value) => {
    return encodeHelper(value, (charCode, startCharCode, endCharCode) => (
        String.fromCharCode(endCharCode - (charCode - startCharCode))
    ))
}

export default { encode }
