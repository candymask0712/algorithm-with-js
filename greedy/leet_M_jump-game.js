// * 문제
// *

//
//

// * 모범 답안
// ?	시간복잡도: O(n)
// ? 	공간복잡도: O(1)
var canJump = function (nums) {
  // ! 점프 가능한 거리의 최댓값 만으로 그 아래 구간은 전부 커버 가능!
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) return true;
  }

  return true;
};

// * 4차 풀이 - (25.11.10) - 성공
var canJump = function (nums) {
  const n = nums.length;
  let max = 0;

  for (let i = 0; i < n - 1; i++) {
    // ! 최댓값만 생각하고 처음에 이부분 누락
    if (max < i) return false;
    const limit = i + nums[i];
    if (limit > max) max = limit;
  }
  return max >= nums.length - 1;
};

// * 3차 풀이 - (25.11.10) - 성공(비효율적)
// ?	시간복잡도: O(n²)
// ? 	공간복잡도: O(n)
var canJump = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(false);
  dp[0] = true;

  for (let i = 0; i < n; i++) {
    if (!dp[i]) continue;
    const max = nums[i];
    for (let range = 1; range <= max; range++) {
      dp[i + range] = true;
    }
  }
  return dp[n - 1];
};

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
