export default function parenthesis(string) {
  let stack = []
  const parenthesisCompare = {
    '(': ')'
  }

  for (let i = 0; i < string.length; ++i) {
    const char = string.charAt(i)
    const last = stack.length ? stack[stack.length-1] : undefined
    if (last && parenthesisCompare[last] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  if (stack.length === 0) {
    return true
  }

  return false
}
