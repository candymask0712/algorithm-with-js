const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = parseInt(input[0]);
  const result = solution(N);
  console.log(result);
  process.exit();
});

function solution(N) {
  const dp = Array.from(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
  }
  return dp[N] % 15746;
}
