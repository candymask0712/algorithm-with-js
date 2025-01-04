const openBracket = ['(', '{', '['];
const pairBracket = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (isValidBracket(rotateBracket(s, i))) {
      answer++;
    }
  }
  return answer;
}

function isValidBracket(bracket) {
  if (bracket.length === 0) return false;
  const stack = [];

  for (let i = 0; i < bracket.length; i++) {
    const current = bracket[i];
    if (openBracket.includes(current)) {
      stack.push(current);
    } else {
      const poped = stack.pop();
      if (pairBracket[current] !== poped) return false;
    }
  }
  if (stack.length > 0) return false;

  return true;
}

function rotateBracket(bracket, space = 0) {
  const bracketArr = bracket.split('');
  const leftBracket = bracketArr.slice(space);
  const rightBracket = bracketArr.slice(0, space);

  return leftBracket.join('') + rightBracket.join('');
}
