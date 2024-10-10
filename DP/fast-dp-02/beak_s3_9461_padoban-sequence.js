// 파도반 수열 - 풀이 템플릿
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   const T = parseInt(input[0]); // 테스트 케이스의 개수

//   for (let i = 1; i <= T; i++) {
//     const N = parseInt(input[i]);
//     const result = solution(N);
//     console.log(result);
//   }

//   process.exit();
// });

// function solution(N) {}

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
  const T = parseInt(input[0]); // 테스트 케이스의 개수

  for (let i = 1; i <= T; i++) {
    const N = parseInt(input[i]);
    const result = solution(N);
    console.log(result);
  }

  process.exit();
});

function solution(N) {
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i < N; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  return dp[N - 1];
}
