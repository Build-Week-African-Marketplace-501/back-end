const requiredString = (str) => {
  return typeof str === 'string' && str !== undefined
}

const requiredInteger = (int) => {
  return typeof int === 'number' && int !== undefined
}

const requiredPositiveInteger = (int) => {
  return requiredInteger(int) && int > 0
}

const Validation = {
  requiredString,
  requiredInteger,
  requiredPositiveInteger,
}

module.exports = {
  Validation,
}
