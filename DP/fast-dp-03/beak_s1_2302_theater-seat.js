// 풀이 템플릿
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let N, M;
// let fixedSeats = [];
// let inputCount = 0;

// rl.on('line', (line) => {
//   if (inputCount === 0) {
//     N = parseInt(line);
//   } else if (inputCount === 1) {
//     M = parseInt(line);
//   } else if (inputCount <= M + 1) {
//     fixedSeats.push(parseInt(line));
//   }

//   inputCount++;

//   if (inputCount > M + 1) {
//     rl.close();
//   }
// });

// rl.on('close', () => {
//   const result = solveProblem(N, M, fixedSeats);
//   console.log(result);
//   process.exit(0);
// });

// function solveProblem(N, M, fixedSeats) {}

// 나의 풀이
function solution(N, M, fixedSeats) {
  let answer = 1;
  let startSeat = 1;
  fixedSeats.push(N + 1);
  fixedSeats.forEach((endSeat) => {
    const seatInterval = endSeat - startSeat;
    answer *= fibo(seatInterval);
    startSeat = endSeat + 1;
  });
  return answer;
}

// !점화식:
// ▪	n ≥ 3일 때, F(n) = F(n-1) + F(n-2)가 성립합니다.
// ▪	이유:
// i.	n번째 사람이 자기 자리에 앉는 경우: F(n-1)
// ii.	n번째 사람이 n-1번 자리에 앉고, n-1번째 사람이 n번 자리에 앉는 경우: F(n-2)

function fibo(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.info(solution(9, 2, [4, 7])); // 12
console.info(solution(1, 1, [1])); // 1
console.info(solution(3, 1, [1, 2, 3])); // 1
