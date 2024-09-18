// * 최근 나의 풀이 (24.09.18)

function solution(s) {
  let answer = 0
  const brackets = s.split('')
  for(let i = 0; i<s.length;i++) {
      const rotatedBrakets = getRotatedBrakets(brackets, i)
      if(isValidBrackets(rotatedBrakets)) answer++
  }
  return answer
}

function getRotatedBrakets(brakets, steps) {
  const copiedBrackets = brakets.slice()
  for(let i = 0; i<steps; i++) {
      const shiftedBracket = copiedBrackets.shift()
      copiedBrackets.push(shiftedBracket)
  }
  return copiedBrackets
}

function isValidBrackets(brackets) {
  const smallBracketStack = []
  const middleBracketStack = []
  const largeBracketStack = []

  const prevBracket = ''
  for(const bracket of brackets) {
      if(bracket === '(') {
          smallBracketStack.unshift(bracket)
          prevBracket = bracket
      }
      if(bracket === ')') {
          const popedBraket = smallBracketStack.shift()
          if(!popedBraket) return false
      }
      if(bracket === '{') {
           middleBracketStack.unshift(bracket)
          prevBracket = bracket
      }
      if(bracket === '}') {
          const popedBraket = middleBracketStack.shift()
          if(!popedBraket) return false
      }
      if(bracket === '[') {
          largeBracketStack.unshift(bracket)
          prevBracket = bracket
      }
      if(bracket === ']') {
          const popedBraket = largeBracketStack.shift()
          if(!popedBraket) return false
      }
  }

  if(smallBracketStack.length === 0 && middleBracketStack.length === 0 && largeBracketStack.length === 0) return true
  else return false
}