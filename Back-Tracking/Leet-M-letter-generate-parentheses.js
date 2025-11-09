// * 문제
// *

//
//

// * 모범 답안

var generateParenthesis = function (n) {
  const combination = [];
  const path = [];
  function DFS(open, close) {
    if (path.length === 2 * n) {
      const str = path.join('');
      combination.push(str);
      return;
    }
    // ! 최대 n개여야 되서 조건식은 미만
    if (open < n) {
      path.push('(');
      DFS(open + 1, close);
      path.pop();
    }
    // ! close가 작아야 순서상 맞음
    if (close < open) {
      path.push(')');
      DFS(open, close + 1);
      path.pop();
    }
  }

  DFS(0, 0);

  return combination;
};

// * 3차 풀이

// * 2차 풀이 - (25.09.06) - 정답 (AI 가이드 참고)

// * 1차 풀이 - (25.09.06) - 정답
var generateParenthesis = function (n) {
  const combination = [];

  function DFS(str) {
    if (str.length === n * 2) {
      combination.push(str);
      return;
    }
    for (const parenthese of ['(', ')']) {
      DFS(str + parenthese);
    }
  }
  DFS('');
  // ! 모두 만들고 필터링 방식이라 비효율적
  return combination.filter(isValidParentheses);
};

function isValidParentheses(str) {
  const stack = [];
  for (const char of str) {
    if (char === '(') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length ? false : true;
}
