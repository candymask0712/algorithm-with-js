// 풀이 템플릿

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   const N = parseInt(input[0]); // 실수들의 개수
//   const numbers = [];

//   for (let i = 1; i <= N; i++) {
//     numbers.push(parseFloat(input[i]));
//   }

//   const result = solution(N, numbers);
//   console.log(result.toFixed(3)); // 소수점 셋째 자리까지 출력

//   process.exit();
// });

// function solution(N, numbers) {
//   return result;
// }

// 나의 풀이
function solution(N, numbers) {
  const dp = Array(N).fill(0);
  dp[0] = numbers[0];
  for (let i = 1; i < N; i++) {
    dp[i] = Math.max(numbers[i], numbers[i] * dp[i - 1]);
  }
  return Math.max(...dp).toFixed(3);
}

console.info(solution(8, [1.1, 0.7, 1.3, 0.9, 1.4, 0.8, 0.7, 1.4]));
console.info(solution(1, [1.1]));
