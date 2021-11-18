import { encodeHelper } from "./helper.js"

describe("Rot8 encode", () => {
  test("should not change value", () => {
    const genCharFn = (charCode, startCharCode, endCharCode) => String.fromCharCode(charCode)

    expect(encodeHelper("ABCD", genCharFn)).toBe("ABCD")
  })
})
