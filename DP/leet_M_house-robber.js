var rob = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    // ! 처음에는 dp[i-1]에도 dp[i]번째의 값을 더하는 경우가 있지 않나 고민
    // ! 그 경우는 dp[i - 2] + nums[i]에서 이미 고려 됨
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[n - 1];
};
