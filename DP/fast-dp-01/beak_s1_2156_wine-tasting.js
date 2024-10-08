// 풀이템플릿
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   const n = parseInt(input[0]);
//   const wines = input.slice(1).map(Number);
//   const result = solution(n, wines);
//   console.log(result);
//   process.exit();
// });

// function solution(n, wines) {

// }

// 나의 풀이
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const n = parseInt(input[0]);
  const wines = input.slice(1).map(Number);
  const result = solution(n, wines);
  console.log(result);
  process.exit();
});

function solution(n, wines) {
  let dp = Array.from({ length: n }, () => 0);

  dp[0] = wines[0];
  dp[1] = wines[1] + wines[0];
  dp[2] = Math.max(
    wines[0] + wines[1],
    wines[0] + wines[2],
    wines[1] + wines[2]
  );

  for (let i = 3; i < n; i++) {
    const case1 = dp[i - 1];
    const case2 = dp[i - 2] + wines[i];
    const case3 = wines[i] + wines[i - 1] + dp[i - 3];
    dp[i] = Math.max(case1, case2, case3);
  }

  return dp[n - 1];
}
