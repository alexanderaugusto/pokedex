import EMPTY_POKEMON from '../assets/json/empty-pokemon.json'

function fillZeroInFront(num, length) {
  return (Array(length).join('0') + num).slice(-length)
}

function makeFirstLetterUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function formatPokeWeight(weight) {
  return `${weight / 10} kg`
}

function formatPokeHeight(weight) {
  return `${weight / 10} m`
}

function mapStatsTitle(stats) {
  const statsTitle = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD'
  }

  return statsTitle[stats]
}

function calculatePercentage(value, total) {
  return (value / total) * 100
}

function createDefaultPokemons() {
  const pokemons = []
  for (let i = 1; i <= 151; i++) {
    pokemons.push({ ...EMPTY_POKEMON, id: `default-${i + 1}` })
  }
  return pokemons
}

const helper = {
  fillZeroInFront,
  makeFirstLetterUpperCase,
  formatPokeWeight,
  formatPokeHeight,
  mapStatsTitle,
  calculatePercentage,
  createDefaultPokemons
}

export default helper

