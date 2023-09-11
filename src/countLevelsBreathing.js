const data = require("../database")
// conta a quantidade de respirações dos personagens e retorna a soma de todos
const countLevelsBreathing = (characters) => {
  const charactersWithLevels = characters.filter(
    (character) => character.levelsBreathing.length > 0
  )
  const totalLevelsBreathing = charactersWithLevels.reduce(
    (total, character) => {
      return total + character.levelsBreathing.length
    },
    0
  )
  return totalLevelsBreathing
}
// conta a quantidade de respirações e ignora repetições
const countUniqueLevelsBreathing = (characters) => {
  const uniqueLevels = characters
    .map((character) => character.levelsBreathing)
    .reduce((accumulator, levels) => accumulator.concat(levels), [])
    .filter((level, index, levels) => levels.indexOf(level) === index)
  return uniqueLevels.length
}
