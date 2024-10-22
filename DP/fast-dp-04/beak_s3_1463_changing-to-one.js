// 풀이템플릿
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     const N = parseInt(input[0]);
//     const result = solution(N);
//     console.log(result);
//     process.exit();
// });

// function solution(N) {

// }

// 문제 풀이

function solution(N) {
  // DP 배열 초기화: 인덱스는 숫자, 값은 해당 숫자를 1로 만드는 최소 연산 횟수
  const dp = new Array(N + 1).fill(0);

  // 상향식 DP
  for (let i = 2; i <= N; i++) {
    // 1을 빼는 경우
    dp[i] = dp[i - 1] + 1;

    // 2로 나누어 떨어지는 경우
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나누어 떨어지는 경우
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[N];
}
