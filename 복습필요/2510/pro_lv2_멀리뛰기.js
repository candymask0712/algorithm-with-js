// * 문제

// * 모범 답안
function solution(n) {
  const MOD = 1234567;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }
  return dp[n];
}
// * 모범 답안 - 2 (공간복잡도 최적화)
function solution(n) {
  const MOD = 1234567;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1; // dp[1]
  let prev1 = 2; // dp[2]

  for (let i = 3; i <= n; i++) {
    const cur = (prev1 + prev2) % MOD;
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}

// * 3차 풀이
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
function solution(n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

// * 2차 풀이
function solution(n) {
  let arr = Array.from(Array(n).fill(0));
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}

// * 1차 풀이

function solution(n) {
  var answer = 0;

  const cases = Array(n + 1).fill(null);
  cases[1] = 1;
  cases[2] = 2;

  for (let i = 3; i <= n; i++) {
    cases[i] = (cases[i - 1] + cases[i - 2]) % 1234567;
  }

  return cases[n];
}
