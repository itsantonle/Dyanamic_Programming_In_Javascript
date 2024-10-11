const manualPalindrome = (str) => {
  if (str.length == 1) return true
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return manualPalindrome(str.slice(1, str.length - 1))
  }
  return false
}

console.log(manualPalindrome('kayaks'))
console.log(manualPalindrome('kayak'))
