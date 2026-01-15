// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(∑ nCi)
//? 공간복잡도: O(k)
var combine = function (n, k) {
  const answer = [];
  const path = [];

  function dfs(start) {
    if (path.length === k) {
      answer.push(path.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  }

  dfs(1);

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O(nCk)
//? 공간복잡도: O(k)
var combine = function (n, k) {
  const answer = [];
  const path = [];

  function dfs(start) {
    if (path.length === k) {
      answer.push(path.slice());
      return;
    }

    const need = k - path.length;
    // 아직 더 뽑아야 하는 숫자의 개수
    // 예: k=3, path=[2] 이면 need=2 (앞으로 2개 더 필요)

    const maxStart = n - need + 1;
    // i부터 n까지 남아있는 숫자의 개수는 (n - i + 1)
    // 이 값이 need 이상이어야 k개를 끝까지 채울 수 있음
    // n - i + 1 >= need
    // i <= n - need + 1
    // 따라서 i의 최댓값이 maxStart

    for (let i = start; i <= maxStart; i++) {
      // start부터 maxStart까지만 탐색
      // 이 범위를 넘어가면, 남은 숫자가 부족해서
      // 어떤 경우에도 k개 조합을 만들 수 없으므로
      // 아예 DFS를 들어가지 않고 가지치기(pruning)한다
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  }

  dfs(1);

  return answer;
};
