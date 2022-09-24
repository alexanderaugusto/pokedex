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

const helper = {
  fillZeroInFront,
  makeFirstLetterUpperCase,
  formatPokeWeight,
  formatPokeHeight,
  mapStatsTitle,
  calculatePercentage
}

export default helper

