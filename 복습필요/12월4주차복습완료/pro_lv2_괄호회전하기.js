// * 1차 풀이
// ! 상수로 선언
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

// * 2차 풀이
// ! 2차 풀이 때도 시간 좀 걸려서 아쉬움
const openBrackets = ['(', '{', '['];
const bracketPairs = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = rotateString(s, i);
    if (isVaildBracket(rotated)) answer++;
  }
  return answer;
}

function rotateString(s, num) {
  // ! 필수 조건은 아니지만 연산이 필요 없기 때문에 추가
  if (num === 0) return s;
  const left = s.slice(0, num);
  const right = s.slice(num);

  return right + left;
}

function isVaildBracket(bracket) {
  const stack = [];
  for (const char of bracket) {
    if (openBrackets.includes(char)) {
      // ! 실수로 char 대신 bracket을 푸쉬해서 풀이 지연 됨
      stack.push(char);
    } else {
      const poped = stack.pop();
      if (poped !== bracketPairs[char]) return false;
    }
  }
  return stack.length ? false : true;
}
