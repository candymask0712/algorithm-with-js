// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  for (let i = 2; i < n; i++) {
    cost[i] += Math.min(cost[i - 2], cost[i - 1]);
  }

  return Math.min(cost[n - 2], cost[n - 1]);
};
