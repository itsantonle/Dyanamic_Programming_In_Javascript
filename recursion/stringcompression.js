const compression = (str, nstr = '', count = 0) => {
  if (str == '') return nstr
  if (str.charAt(0) === str.charAt(1)) {
    count = count + 1
    return compression(str.slice(1, str.length), nstr, count)
  } else {
    count = count + 1
    return compression(
      str.slice(1, str.length),
      nstr + `${str.charAt(0)}${count}`,
      0
    )
  }
}

/**
 * aabb ==> a2b2
 * a => a1
 * '' => ''
 *
 */

console.log(compression('bbaaacccddaa'))
