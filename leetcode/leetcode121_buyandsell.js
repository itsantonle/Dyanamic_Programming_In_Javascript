// brute force

const arr = [7, 1, 5, 3, 6, 4]

// basically you need get the first minimum and then get the get the next maximum
// after the index of the minimum
// spread the array

const buyAndSell = (arr) => {
  const min = Math.min(...arr)
  const minIndex = arr.indexOf(min)
  const afterMinArr = arr.slice(minIndex + 1, arr.length)
  const maxFuture = Math.max(...afterMinArr.filter((i) => i > min))
  const profit = maxFuture - min
  if (profit < 0) return 0
  return profit
}

console.log(buyAndSell(arr))

//optimized using two pointers

const buyandSellN = (arr) => {
  let max = 0
  let left = 0
  let right = 1
  while (right < arr.length) {
    if (arr[left] > arr[right]) {
      left = right
    }
  }
}
