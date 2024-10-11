const gridTraveler = (m, n) => {
  if (n == 1 && m == 1) {
    return 1
  }
  if (n == 0 || m == 0) {
    return 0
  }

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))

const betterGrid = (m, n, memo = {}) => {
  const key = m + ',' + n
  if (key in memo) {
    return memo[key]
  }
  if (n == 1 && m == 1) {
    return 1
  }
  if (n == 0 || m == 0) {
    return 0
  }

  memo[key] = betterGrid(m - 1, n, memo) + betterGrid(m, n - 1, memo)

  return memo[key]
}

console.log(betterGrid(18, 20))
console.log(gridTraveler(18, 20))
