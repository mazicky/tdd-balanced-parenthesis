export default function parenthesis(string) {
  let stackSize = 0
  for (let i = 0; i < string.length; ++i) {
    const char = string.charAt(i)
    if (char === '(') {
      stackSize++
    } else if (char === ')') {
      stackSize--
    }
    if (stackSize < 0)
      return false
  }

  if (stackSize === 0) {
    return true
  }

  return false
}
