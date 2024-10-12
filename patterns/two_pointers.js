// slice two variables and move them closer or farther depending ont eh problem

//this will solve the palindrom problem with two pointers instead of recursion
// in two pointers you must keep start of the end and the start using references
const twoPointers = (str) => {
  start = 0
  end = str.length - 1

  while (start < end) {
    if (str.charAt(start) != str.charAt(end)) {
      return false
    }
    start += 1
    end -= 1
  }

  return true
}

console.log(twoPointers('kayak'))
