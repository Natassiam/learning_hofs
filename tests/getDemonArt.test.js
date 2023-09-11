const getDemonArt = require("../src/getDemonArt")
const data = require("../database")
it("should return an array of character names with demon art", () => {
  expect(getDemonArt(data)).toEqual(["Nezuko Kamado"])
  expect(typeof getDemonArt(data)).toBe("object")
})
it("should return an exception", () => {
  expect(() => getDemonArt()).toThrow(
    "You dont pass parameter! Please try again!"
  )
})
