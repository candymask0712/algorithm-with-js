// * 문제
// *

//
//

// * 모범 답안
// ? 시간복잡도: O(n*m)
// ? 공간복잡도: O(n)
// ! 1차원 dp로 공간복잡도를 줄이는 방식
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 시작점 또는 도착점이 장애물이면 0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  // 1차원 dp 배열 초기화
  const dp = Array(n).fill(0);
  dp[0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        // 장애물이면 해당 칸은 0으로 초기화
        dp[j] = 0;
      } else if (j > 0) {
        // 왼쪽에서 오는 경로(dp[j-1])를 더함
        dp[j] += dp[j - 1];
      }
    }
  }

  return dp[n - 1];
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.11.08) - 성공
// ? 시간복잡도: O(n*m)
// ? 공간복잡도: O(n*m)
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // ! 시작 또는 도착점이 장애물인 경우 예외처리 필요
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  const grid = Array.from({ length: m }, () => Array(n).fill(0));
  grid[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === 0) & (j === 0)) continue;
      if (obstacleGrid[i][j] === 1) {
        grid[i][j] = 0;
        continue;
      }

      const topPath = i > 0 ? grid[i - 1][j] : 0;
      const leftPath = j > 0 ? grid[i][j - 1] : 0;

      const pathCase = topPath + leftPath;

      grid[i][j] = pathCase;
    }
  }
  return grid[m - 1][n - 1];
};
