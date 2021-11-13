const { encodeHelper } = require("./helper")

const encode = (value) => {
    return encodeHelper(value, (charCode, startCharCode, endCharCode) => (
        String.fromCharCode(endCharCode - (charCode - startCharCode))
    ))
}

module.exports = { encode }
