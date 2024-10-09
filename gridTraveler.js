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
