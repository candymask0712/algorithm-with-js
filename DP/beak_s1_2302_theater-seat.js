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
