const manualReversal = (str) => {
  if (str == '') {
    return ''
  }
  return manualReversal(str.substring(1) + str.charAt(0))
}
