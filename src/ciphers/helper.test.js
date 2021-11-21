import { encodeHelper } from "./helper.js"

describe("Rot8 encode", () => {
  test("should not change value (NOT latin letters)", () => {
    const genCharFn = (charCode, startCharCode, endCharCode) => String.fromCharCode(charCode + 100)

    expect(encodeHelper("Здесь был я!", genCharFn)).toBe("Здесь был я!")
  })

  test("should not change value (latin letters)", () => {
    const genCharFn = (charCode, startCharCode, endCharCode) => String.fromCharCode(charCode)

    expect(encodeHelper("ABCD", genCharFn)).toBe("ABCD")
  })

  test("should change letters to '*' if it is in the interval", () => {
    const genCharFn = (charCode, startCharCode, endCharCode) => {
      if (charCode >= startCharCode && charCode <= endCharCode) {
        return "*"
      }

      return String.fromCharCode(charCode)
    }

    expect(encodeHelper("Здесь ABCD находится!", genCharFn)).toBe("Здесь **** находится!")
  })
})
