function solution(arr) {
  let answer;
  const n = arr.length;
  dp = Array(n).fill(0);
  dp[0] = arr[0];
  dp[1] = arr[0] + arr[1];
  for (let i = 2; i < n; i++) {
    console.warn(dp[i - 1], dp[i - 2] + arr[i]);
    const max = Math.max(dp[i - 1] + arr[i], dp[i - 2] + arr[i]);
    console.info(i, max);
    dp[i] = max;
  }
  console.table(dp);
  return dp[n - 1];
}

console.info(solution([6, 10, 13, 9, 8, 1]));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
