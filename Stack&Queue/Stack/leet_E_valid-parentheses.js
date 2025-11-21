// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.11.09) - 정답
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
// 최악의 경우 문자열 전체가 여는 괄호

var isValid = function (s) {
  const stack = [];
  const open = ['(', '{', '['];
  const closeMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (open.includes(char)) {
      stack.push(char);
    } else {
      const cur = stack.pop();
      if (cur !== closeMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// * 1차 풀이

var isValid = function (s) {
  const openBrackets = ['(', '{', '['];
  const validBrackets = ['()', '{}', '[]'];
  const stack = [];

  for (const bracket of s) {
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      const poped = stack.pop();
      const concat = poped + bracket;
      if (!validBrackets.includes(concat)) return false;
    }
  }
  if (stack.length !== 0) return false;

  return true;
};
