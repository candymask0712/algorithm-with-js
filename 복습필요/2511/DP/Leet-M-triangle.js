// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
var minimumTotal = function (triangle) {
  const n = triangle.length;
  // 맨 아래 행을 시작점으로 복사
  const dp = triangle[n - 1].slice();

  // 아래에서 위로 올라오면서 dp 갱신
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      const currentValue = triangle[row][col];
      const leftDown = dp[col];
      const rightDown = dp[col + 1];
      const minSum = Math.min(leftDown, rightDown) + currentValue;
      dp[col] = minSum;
    }
  }

  // 맨 위까지 올라오면 dp[0]이 전체 최소 경로 합
  return dp[0];
};
