// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이

var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const ch = Array(n).fill(0);

  function dfs(c) {
    for (let i = 0; i < n; i++) {
      if (isConnected[c][i] && !ch[i]) {
        ch[i] = 1; // ! 처음에 방문 표시를 하지 않아 콜스택 초과
        dfs(i);
      }
    }
  }
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (ch[i]) continue;
    answer++;
    ch[i] = 1; // ! 처음에 방문 표시를 하지 않아 콜스택 초과
    dfs(i);
  }
  return answer;
};
