// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이
var generateParenthesis = function (n) {
  const answer = [];

  function dfs(open, close, str) {
    // ! 조건 더 간단하게 작성 가능
    if (open > n || close > n) return;

    if (open === n && close === n) {
      answer.push(str);
      return;
    }

    if (open > close) {
      dfs(open, close + 1, str + ')');
    }
    dfs(open + 1, close, str + '(');
  }

  dfs(0, 0, '');
  return answer;
};

// * 1차 풀이
// ? 시간복잡도: 카탈린 수
// “유효한 괄호 조합의 개수가 카탈란 수이기 때문에 시간복잡도는 O(Cn)이며, 각 문자열 생성 비용까지 포함하면 O(Cn × n)입니다.”
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
