const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const dp = Array(N + 1).fill(0);

dp[1] = 1;
dp[2] = 3;
dp[3] = 5;

for (let i = 4; i <= N; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}

console.log(dp[N]);
