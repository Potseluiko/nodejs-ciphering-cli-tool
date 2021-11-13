const charsIntervals = [
  ["A", "Z"],
  ["a", "z"]
]

const charCodesIntervals = charsIntervals.map(([startChar, endChar]) => [
  startChar.codePointAt(0),
  endChar.codePointAt(0)
])

const encodeHelper = (value, getCharFn) => {
  const charsList = value?.split("") || []

  const newCharsList = charsList.map((char) => {
    const charCode = char.charCodeAt(0)
    let newChar = char

    charCodesIntervals.forEach(([startCharCode, endCharCode]) => {
      if (charCode >= startCharCode && charCode <= endCharCode) {
        newChar = getCharFn(charCode, startCharCode, endCharCode)
      }
    })

    return newChar
  })

  return newCharsList.join("")
}

export { encodeHelper }
