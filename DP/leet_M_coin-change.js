// 나의 풀이
function coinChange(coins, amount) {
  let answer = 0;
  if (amount === 0) return answer;
  const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }
  console.log(dp);

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
