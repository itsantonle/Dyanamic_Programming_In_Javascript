// understanding the fib sequence

// 1, 1, 2, 3, 5
// 1, 2, 3, 4, 5

// the sum of th eprevious two numbers except the first to
// the base is that if n given is less or equals to 2 return 1

const fib = (n) => {
  if (n <= 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

const foo = (m) => {
  if (n <= 1) return
  foo(n - 1)
}

const dib = (n) => {
  if (n <= 1) return
  dib(n - 1)
  dib(n - 1)
}

const lib = (n) => {
  if (n <= 1) return
  lib(n - 2)
  lib(n - 2)
}

//memoized fib
// the memo {} stores n as key value
// {3: 2} when n = 3

const fibB = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

// logic is storing the values inside an object so that if it exist you can already
// just get it from teh object

console.log(fibB(6))
