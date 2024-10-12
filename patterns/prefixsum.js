const prefixSum = (i, j, arr) => {
  const subArray = arr.slice(i, j + 1)
  let sum = 0
  subArray.forEach((number) => {
    sum += number
  })

  return sum
}

console.log(prefixSum(1, 2, [1, 2, 3, 4]))
