import caesar from "./caesar.js"

describe("Caesar encode", () => {
  test("should not change value if no second param", () => {
    expect(caesar.encode("ABCD")).toBe("ABCD")
  })

  test("should replace uppercase letters", () => {
    expect(caesar.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toBe("BCDEFGHIJKLMNOPQRSTUVWXYZA")
  })

  test("should replace lowercase letters", () => {
    expect(caesar.encode("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza")
  })

  test("should replace only latin letters #1", () => {
    expect(caesar.encode("Привет, ABC!", 1)).toBe("Привет, BCD!")
  })

  test("should replace only latin letters #2", () => {
    expect(caesar.encode("123!№%:,.;()_+", 1)).toBe("123!№%:,.;()_+")
  })
})

describe("Caesar decode", () => {
  test("should not change value if no second param", () => {
    expect(caesar.decode("ABCD")).toBe("ABCD")
  })

  test("should replace uppercase letters", () => {
    expect(caesar.decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toBe("ZABCDEFGHIJKLMNOPQRSTUVWXY")
  })

  test("should replace lowercase letters", () => {
    expect(caesar.decode("abcdefghijklmnopqrstuvwxyz", 1)).toBe("zabcdefghijklmnopqrstuvwxy")
  })

  test("should replace only latin letters #1", () => {
    expect(caesar.decode("Привет, ABC!", 1)).toBe("Привет, ZAB!")
  })

  test("should replace only latin letters #2", () => {
    expect(caesar.decode("123!№%:,.;()_+", 1)).toBe("123!№%:,.;()_+")
  })
})

describe("Caesar (conbinations)", () => {
  test("should not change value: encode + decode", () => {
    expect(caesar.encode(caesar.decode("ABCD"))).toBe("ABCD")
  })
})
