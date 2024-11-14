// * 나의 풀이
var rob = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);
  dp[0] = nums[0];
  // ! 처음에 nums[1]로 해서 틀림
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[n - 1];
};
