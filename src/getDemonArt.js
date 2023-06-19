const data = require("../database")

const getDemonArt = (characters) => {
  if (!characters) {
    throw new Error("You dont pass parameter! Please try again!")
  }
  return characters.reduce((accumulator, character) => {
    if (characters.demonArt) {
      accumulator.push(character.name)
    }
    return accumulator
  }, [])
}
module.exports = getDemonArt
