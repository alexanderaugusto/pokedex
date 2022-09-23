function fillZeroInFront(num, length) {
  return (Array(length).join('0') + num).slice(-length)
}

function makeFirstLetterUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const helper = {
  fillZeroInFront,
  makeFirstLetterUpperCase
}

export default helper

