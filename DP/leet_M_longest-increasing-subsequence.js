// 나의 풀이
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max(...dp);
};
