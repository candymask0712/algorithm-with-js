// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.10.03) - 정답
// ?	시간복잡도: O(n)
// ? 	공간복잡도: O(1)
var canJump = function (nums) {
  let maxReach = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
};

// * 1차 풀이 - (25.10.03) - 실패(시간초과)
// ?	시간복잡도: O(2^n)
// ? 	공간복잡도: O(n)
var canJump = function (nums) {
  const n = nums.length;
  let answer = false;

  const visited = Array(n).fill(false);

  function dfs(index) {
    if (answer) return;
    if (index > n) return;
    if (index === n - 1) {
      answer = true;
      return;
    }

    const distance = nums[index];
    for (let i = 1; i <= distance; i++) {
      const next = index + i;
      if (!visited[next]) {
        visited[next] = true;
        dfs(next);
      }
    }
  }

  visited[0] = true;
  dfs(0);

  return answer;
};
