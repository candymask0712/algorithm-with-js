// * 나의 풀이
// ! dp방식 사용 시 시간복잡도가 하위권
var jump = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => 10001);
  dp[0] = 0;
  nums.forEach((num, index) => {
    for (let i = 1; i <= num; i++) {
      dp[index + i] = Math.min(dp[index] + 1, dp[index + i]);
    }
  });
  return dp[n - 1];
};

// * 참고 풀이
var jump = function (nums) {
  let jumps = 0;
  let currentMax = 0; // 현재 점프로 도달할 수 있는 최대 거리
  let farthest = 0; // 지금까지 도달 가능한 가장 먼 위치

  // 마지막 위치는 확인할 필요가 없으므로 n-1까지만 순회
  for (let i = 0; i < nums.length - 1; i++) {
    // 현재 위치에서 도달할 수 있는 가장 먼 거리 갱신
    farthest = Math.max(farthest, i + nums[i]);

    // 현재 점프로 갈 수 있는 최대 거리에 도달했다면
    if (i === currentMax) {
      jumps++; // 점프 횟수 증가
      currentMax = farthest; // 다음 점프로 갈 수 있는 최대 거리 갱신
    }
  }

  return jumps;
};
