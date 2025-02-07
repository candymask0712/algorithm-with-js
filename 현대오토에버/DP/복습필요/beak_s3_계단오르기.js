const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const dp = Array(N + 1).fill(BigInt(0));

dp[1] = BigInt(1);
dp[2] = BigInt(1);

for (let i = 3; i <= N; i++) {
  dp[i] = BigInt(dp[i - 2] + dp[i - 1]);
}

console.log(Number(dp[N]));
