const binary_search = (array = [], target) => {
  if (array.length == 0) return false

  const midpoint = Math.floor(array.length / 2)
  if (midpoint === target) return true
  if (midpoint < target) {
    return binary_search(array.slice(midpoint + 1, array.length), target)
  }
  if (midpoint > target) {
  }
  return binary_search(array.slice(0, midpoint), target)
}

console.log(binary_search([1, 2, 3], 1))
