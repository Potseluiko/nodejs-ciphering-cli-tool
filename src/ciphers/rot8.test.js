import rot8 from "./rot8.js"

describe("Rot8 encode", () => {
  test("should replace uppercase letters", () => {
    expect(rot8.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("IJKLMNOPQRSTUVWXYZABCDEFGH")
  })

  test("should replace lowercase letters", () => {
    expect(rot8.encode("abcdefghijklmnopqrstuvwxyz")).toBe("ijklmnopqrstuvwxyzabcdefgh")
  })

  test("should replace only latin letters #1", () => {
    expect(rot8.encode("Привет, ABC!")).toBe("Привет, IJK!")
  })

  test("should replace only latin letters #2", () => {
    expect(rot8.encode("123!№%:,.;()_+")).toBe("123!№%:,.;()_+")
  })
})

describe("Rot8 decode", () => {
  test("should replace uppercase letters", () => {
    expect(rot8.decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("STUVWXYZABCDEFGHIJKLMNOPQR")
  })

  test("should replace lowercase letters", () => {
    expect(rot8.decode("abcdefghijklmnopqrstuvwxyz")).toBe("stuvwxyzabcdefghijklmnopqr")
  })

  test("should replace only latin letters #1", () => {
    expect(rot8.decode("Привет, ABC!")).toBe("Привет, STU!")
  })

  test("should replace only latin letters #2", () => {
    expect(rot8.decode("123!№%:,.;()_+")).toBe("123!№%:,.;()_+")
  })
})
