const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const ranges = input.slice(2).map((range) => range.split(' ').map(Number));

const dp = Array(N + 1).fill(0);
dp[1] = nums[0];

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + nums[i - 1];
}

ranges.forEach((range) => {
  const [st, ed] = range;
  console.log(dp[ed] - dp[st - 1]);
});
