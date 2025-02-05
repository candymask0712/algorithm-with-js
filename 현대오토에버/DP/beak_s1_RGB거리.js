const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const costs = input.slice(1).map((line) => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0] = costs[0];

for (let i = 1; i < N; i++) {
  const red = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  const green = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  const blue = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  dp[i] = [red, green, blue];
}

console.log(Math.min(...dp[N - 1]));
