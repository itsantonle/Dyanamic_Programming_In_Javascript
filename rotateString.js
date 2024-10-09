const rotateString = (str, otherString) => {
  const extendedstr = str + str
  const first = extendedstr.indexOf(otherString[0])
  return extendedstr.slice(first, first + str.length) == otherString
}

console.log(rotateString('waterbottle', 'erbottlewat'))
console.log(rotateString('odd', 'ddi'))
console.log(rotateString('what', 'atwh'))
