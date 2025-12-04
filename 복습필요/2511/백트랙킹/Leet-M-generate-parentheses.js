// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(4^n / √n)
// ? 공간복잡도: O(n)
var generateParenthesis = function (n) {
  const answer = [];
  function dfs(str, open, close) {
    if (str.length === n * 2) {
      answer.push(str);
      return;
    }
    if (open < n) dfs(str + '(', open + 1, close);
    if (close < open) dfs(str + ')', open, close + 1);
  }

  dfs('', 0, 0);
  return answer;
};
