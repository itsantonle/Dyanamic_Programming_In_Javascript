const dectoBin = (number, result = '') => {
  if (number === 0) {
    return result
  }

  result = result + String(number % 2)

  return dectoBin(Math.floor(number / 2), result)
}

console.log(dectoBin(233))
