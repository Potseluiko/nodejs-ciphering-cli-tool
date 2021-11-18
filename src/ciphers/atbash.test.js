import atbash from "./atbash.js"

describe("Atbash", () => {
  test("should replace uppercase letters", () => {
    expect(atbash.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("ZYXWVUTSRQPONMLKJIHGFEDCBA")
  })

  test("should replace lowercase letters", () => {
    expect(atbash.encode("abcdefghijklmnopqrstuvwxyz")).toBe("zyxwvutsrqponmlkjihgfedcba")
  })

  test("should replace only latin letters #1", () => {
    expect(atbash.encode("Привет, ABC!")).toBe("Привет, ZYX!")
  })

  test("should replace only latin letters #2", () => {
    expect(atbash.encode("123!№%:,.;()_+")).toBe("123!№%:,.;()_+")
  })
})

describe("Atbash (conbinations)", () => {
  test("should not change value", () => {
    expect(atbash.encode(atbash.encode("ABCD"))).toBe("ABCD")
  })
})
