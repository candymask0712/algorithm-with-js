function solution(land) {
  const N = land.length;
  const dp = Array.from({ length: N }, () => Array(4).fill(0));

  dp[0] = land[0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        dp[i][j] = Math.max(dp[i - 1][k] + land[i][j], dp[i][j]);
      }
    }
  }

  return Math.max(...dp[N - 1]);
}
