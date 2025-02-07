function solution(m, n, puddles) {
  const MOD = 1000000007;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  // 웅덩이 위치 표시
  for (let [x, y] of puddles) {
      dp[y][x] = -1;
  }

  // 출발점 설정
  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
          if (i === 1 && j === 1) continue; // 시작점 제외
          if (dp[i][j] === -1) { // 웅덩이일 경우
              dp[i][j] = 0;
          } else {
              let fromTop = i > 1 ? dp[i - 1][j] : 0;
              let fromLeft = j > 1 ? dp[i][j - 1] : 0;
              dp[i][j] = (fromTop + fromLeft) % MOD;
          }
      }
  }
  
  console.log(dp)
  
  return dp[n][m];
}