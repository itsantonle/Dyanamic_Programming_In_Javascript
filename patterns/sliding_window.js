// finds substrings that fulfill criteria
// examples are string rotations or arrays

// find a subArray with the size of k and maximum sum
/**
 * find the maxium sum of first n elements
 * then for each iteration minus the left most element in the window
 * if the sum of th eprevious is bigger then the sub array is still that
 */

const arr1 = [3, 2, 7, 5, 9, 6, 2]
const max = 3

const sliding_window = (arr, max) => {
  let windowSum = 0
  let current = 0
  let startMaxIn = 0
  let result = []

  while (current < arr.length) {
    const currentArr = arr.slice(current, current + max)
    const tempSum = currentArr.reduce((acc, curr) => {
      return acc + curr
    }, 0)

    if (tempSum > windowSum) {
      windowSum = tempSum
      startMaxIn = current
      result = arr.slice(startMaxIn, startMaxIn + max)
    }
    current += 1
  }
  return result
}

console.log(sliding_window([1, 2, 3, 4, 5], 2))
console.log(sliding_window(arr1, max))
